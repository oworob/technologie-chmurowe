FROM node:alpine

WORKDIR /server
COPY package.json package-lock.json server.js .
RUN npm install --silent
CMD ["node", "server.js"]