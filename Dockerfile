FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --prodution

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]