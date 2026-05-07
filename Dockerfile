# Étape 1 : Construction (Build)
FROM node:20-slim AS build
WORKDIR /app
# On copie les fichiers de l'app web
COPY apps/web/package*.json ./
RUN npm install
COPY apps/web/ .
# On génère les fichiers statiques (le dossier dist ou build)
RUN npm run build

# Étape 2 : Serveur de production (Nginx)
FROM nginx:stable-alpine
# On copie les fichiers buildés depuis l'étape précédente vers le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# On expose le port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
