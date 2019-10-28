FROM alpine:latest
WORKDIR ./
RUN apk add --update npm
RUN npm install
COPY ui ui
EXPOSE 3000
WORKDIR ./ui
ENTRYPOINT ["npm", "start"]