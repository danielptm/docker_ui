FROM alpine:latest
WORKDIR ./ui
RUN apk add --update npm
COPY public public
COPY package.json package.json
COPY src src
RUN npm install
EXPOSE 3000
WORKDIR ./ui
ENTRYPOINT ["npm", "start"]