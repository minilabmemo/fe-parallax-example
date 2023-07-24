# build stage
FROM node:14.15.0 as build-stage

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
# FROM node:10

# WORKDIR /app

# COPY --from=build_image /app/dist ./dist

# RUN npm i -g http-server

# CMD http-server ./dist

FROM nginx  as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]