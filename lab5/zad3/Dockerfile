ARG version=3.9

FROM python:${version}
WORKDIR /app
COPY myapp .
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
CMD [ "flask", "run" ]