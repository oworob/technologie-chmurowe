
FROM node:latest
WORKDIR /app
COPY ["app/package.json", "app/package-lock.json*", "./"]
RUN npm install
COPY app .
ENV port=3000
EXPOSE $port
CMD ["node", "index.js"]