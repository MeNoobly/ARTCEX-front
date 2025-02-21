# Используем официальный образ Node.js для сборки
FROM node:18-alpine as build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем образ Nginx для раздачи собранного приложения
FROM nginx:alpine

# Копируем собранные файлы из /app/build в директорию для статики Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# (Опционально) Копируем конфигурацию Nginx, если есть кастомные настройки
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Объявляем, что контейнер будет слушать порт 80
EXPOSE 80

# Запускаем Nginx в foreground режиме
CMD ["nginx", "-g", "daemon off;"]