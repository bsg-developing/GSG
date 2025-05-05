# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration production

# Stage 2: Serve with nginx
FROM nginx:alpine

# Удаляем дефолтный nginx конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем билд из предыдущего этапа
COPY --from=builder /app/dist/gsg /usr/share/nginx/html
