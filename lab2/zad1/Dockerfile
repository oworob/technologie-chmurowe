FROM node:12
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent
COPY . .
EXPOSE 8080

CMD ["npm", "start"]