# developement stage
FROM node:20-slim AS dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm","run","dev","--","--host","0.0.0.0"] 
# ["--", "--host","0.0.0.0"] to bind to all IPs (allows access from outside the container)

# build stage
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html

# copy ngnix config
COPY ngnix.conf /etc/ngnix/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]