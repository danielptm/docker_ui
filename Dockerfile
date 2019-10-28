FROM alpine:latest
WORKDIR ./
RUN apk add --update npm
RUN apk update && apk upgrade && apk add bash
COPY ui ui
COPY backend backend
COPY start.sh start.sh
WORKDIR ./ui
RUN npm install
WORKDIR ./backend
RUN npm install
EXPOSE 3000
WORKDIR /
CMD bash ./start.sh
