FROM node:20

WORKDIR /app
COPY . .
RUN npm ci

ENV DATABASE_URL="postgresql://postgres:Password12345!@mynext14demodb:5432/mynext14demo?schema=public"
CMD npm run dev