# development stage
FROM node:20-slim AS dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx","nodemon","src/index.js"]

# production stage
FROM node:20-slim AS prod

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["pm2-runtime","ecosystem.config.js"]