FROM alpine:latest
WORKDIR ./
RUN apk add --update npm
COPY ui ui
COPY backend backend
WORKDIR ./ui
RUN npm install
WORKDIR ./backend
RUN npm install
EXPOSE 3000 8080
WORKDIR ./ui
ENTRYPOINT ["npm", "start"]
