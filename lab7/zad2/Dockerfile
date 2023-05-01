FROM node:alpine

WORKDIR /app
COPY /src/package.json /src/package-lock.json src/app.js .
RUN npm install --silent
EXPOSE 3003
CMD ["npm", "run", "build", "start"]