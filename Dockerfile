FROM node:18.17 as builderStage
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --omit=dev

FROM nginx:alpine as lastStage
VOLUME /var/cache/nginx
COPY --from=builderStage app/dist/ecommerce-frontend/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
