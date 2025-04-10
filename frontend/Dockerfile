# developement stage
FROM node:22-alphine as dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm","run","dev"]

# build stage
FROM node:22-alphine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:alphine as prod

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]