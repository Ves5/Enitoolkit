FROM python:3.10-slim

# setup nginx with uwsgi proxy
RUN apt update && apt install -y nginx gcc
COPY uwsgi.conf /etc/nginx/conf.d
RUN service nginx start

# setup flask app with uwsgi
WORKDIR /app

COPY reqs.txt .

RUN pip install --no-cache-dir -r reqs.txt && pip install 'uwsgi==2.0.21'

COPY flask/ .

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

# run uwsgi
EXPOSE 80

ENV version=1.0.4
CMD [ "./entrypoint.sh" ]