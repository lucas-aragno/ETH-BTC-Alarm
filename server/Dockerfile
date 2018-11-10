FROM node:10.11.0-jessie

ENV API_URL="http://cloc-auth-dev.us-east-1.elasticbeanstalk.com/api/v1"

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run start:dev
