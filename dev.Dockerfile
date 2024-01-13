FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM deps AS builder
WORKDIR /usr/src/app
COPY prisma ./prisma
COPY public ./public
COPY src ./src
COPY next.config.js ./
COPY tsconfig.json ./
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
RUN npx prisma generate
RUN npm run build

# Copy all the files and run next
FROM builder AS runner
WORKDIR /usr/src/app
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1
#RUN addgroup --system --gid 1001 nodejs
#RUN adduser --system --uid 1001 nextjs
#COPY --from=builder /usr/src/app/prisma ./prisma
#COPY --from=builder /usr/src/app/public ./public
# Set the correct permission for prerender cache
#RUN mkdir .next
#RUN chown nextjs:nodejs .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder usr/src/app/.next/static ./.next/static
#USER nextjs
#EXPOSE 3000
# CMD npm run dev