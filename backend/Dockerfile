FROM alpine:latest
WORKDIR ./backend
RUN apk add --update npm
COPY index.js index.js
COPY package.json package.json
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm", "start"]
