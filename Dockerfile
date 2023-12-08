# Этап 1: Сборка приложения
FROM node:16-alpine as build

# Установить рабочую директорию в контейнере
WORKDIR /app

# Копировать файлы package.json и package-lock.json (или yarn.lock) в рабочую директорию
COPY package.json package-lock.json ./

# Установить зависимости проекта
RUN npm install

# Копировать исходный код проекта в рабочую директорию
COPY . .

# Собрать приложение
RUN npm run build

# Этап 2: Запуск приложения с помощью Nginx
FROM nginx:alpine

# Копировать собранные файлы React из предыдущего этапа в папку, откуда nginx будет их раздавать
COPY --from=build /app/build /usr/share/nginx/html

# Удалить конфигурации nginx по умолчанию
RUN rm /etc/nginx/conf.d/default.conf

# Копировать конфигурационный файл nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Выставить порт, который будет прослушиваться
EXPOSE 80

# Запустить nginx
CMD ["nginx", "-g", "daemon off;"]
