# developement stage
FROM node:20-slim AS dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm","run","dev"]

# build stage
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:alpine AS prod

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]