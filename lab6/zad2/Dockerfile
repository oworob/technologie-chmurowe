FROM node:alpine

WORKDIR /app
COPY /app/package.json /app/package-lock.json app/server.js .
RUN npm install --silent
EXPOSE 3000
CMD ["npm", "run", "start"]