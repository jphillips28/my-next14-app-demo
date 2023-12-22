FROM node:20

WORKDIR /app
COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

ENV DATABASE_URL="postgresql://postgres:Password12345!@mynext14demodb:5432/mynext14demo?schema=public"

CMD npm run dev