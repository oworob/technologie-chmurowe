FROM nginx:latest

RUN mkdir -p /var/cache/nginx && \
    chown nginx:nginx /var/cache/nginx

RUN mkdir -p /etc/nginx/ssl && \
    chown nginx:nginx /etc/nginx/ssl

RUN apt-get update && apt-get install -y openssl

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/nginx.key \
    -out /etc/nginx/ssl/nginx.crt \
    -subj "/C=US/ST=CA/L=San Francisco/O=Example/OU=Web Security/CN=example.com"

COPY default.conf /etc/nginx/conf.d

EXPOSE 80