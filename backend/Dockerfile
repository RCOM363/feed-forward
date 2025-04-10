# development stage
FROM node:22-alphine as dev

WORKDIR /app

COPY package*.json ./
RUN npm intsall

COPY . .

CMD ["npx","nodemon","index.js"]

# production stage
FROM node:22-alphine as prod

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node","index.js"]