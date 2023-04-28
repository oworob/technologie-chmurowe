
FROM alpine:latest

ARG pythonversion=3
ENV port=3000

RUN apk add --no-cache python${pythonversion} py-pip

WORKDIR /app
COPY app .
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE $port
CMD [ "python", "app.py" ]