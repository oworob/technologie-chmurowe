FROM nginx
COPY ./default.conf /etc/nginx/conf.d/
COPY /src /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html/*
EXPOSE 30
