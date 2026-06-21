FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/ui/package.json packages/ui/
COPY packages/web/package.json packages/web/

RUN npm ci

COPY packages/ui/ packages/ui/
COPY packages/web/ packages/web/

RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/packages/web/package.json packages/web/
COPY --from=builder /app/packages/web/public packages/web/public
COPY --from=builder /app/packages/web/.next packages/web/.next
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
