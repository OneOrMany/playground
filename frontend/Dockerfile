FROM node 

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "serve", "--", "--port", "3000"]
