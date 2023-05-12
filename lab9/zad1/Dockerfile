
FROM node:alpine

WORKDIR /app
COPY /app/package*.json app/app.js .
RUN npm install --silent
RUN apk update && apk add --no-cache curl

HEALTHCHECK --interval=10s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

CMD ["node", "app.js"]