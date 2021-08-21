FROM node:15-alpine as builder
WORKDIR /usr/src/app

COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .

RUN npm run build

FROM jonasal/nginx-certbot:2.0.1-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/template01
COPY ./nginx/user_conf.d/nginx.conf /etc/nginx/conf.d/default.template
ARG NGINX_HOST
RUN /bin/sh -c "if [ -n \"${NGINX_HOST}\" ]; then echo envsubst '\${NGINX_HOST}' with ${NGINX_HOST} && envsubst '\${NGINX_HOST}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf; fi ;"
