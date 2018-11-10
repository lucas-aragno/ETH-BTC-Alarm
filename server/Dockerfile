FROM node:10.11.0-jessie

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run start
