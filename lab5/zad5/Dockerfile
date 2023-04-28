# ---------- part one

FROM Ubuntu:latest AS build

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs build-essential

WORKDIR /app
COPY /app .
RUN npm install
RUN npm run build

# ---------- part two

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]