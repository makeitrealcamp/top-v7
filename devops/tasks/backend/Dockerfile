FROM node:alpine

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8000
VOLUME /usr/src/app/

CMD ["yarn", "dev"]

