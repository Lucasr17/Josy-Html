# Utilisation de l'image officielle Node.js
FROM node:14

# Création du répertoire de l'application
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du projet
COPY . .

# Exposition du port que l'application va utiliser
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
