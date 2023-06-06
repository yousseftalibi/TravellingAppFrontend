FROM node:16-alpine

RUN apk add --no-cache git

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install


COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
