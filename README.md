# README Technique - Projet de Boutique de Fleurs
École EPSI - Architecture logiciel

## Introduction
Ce projet a été réalisé dans le cadre du cours "Architecture logiciel" de l'école EPSI. L'objectif est de concevoir et de développer un site de boutique de fleurs en optimisant l'architecture de l'application.

## Technologies Utilisées
- **Frontend** : Vue.js
- **Backend** : Node.js, Express.js
- **Base de données** : Azure SQL Database
- **Authentification** : Auth0
- **Serveur** : Hébergement sur Azure

## Installation

### Étapes d'installation

1. Cloner le dépôt :
    ```bash
    git clone https://github.com/votre-repo/archi.git
    cd archi
    ```

2. Installer les dépendances du backend :
    ```bash
    cd back
    npm install
    ```

3. Installer les dépendances du frontend :
    ```bash
    cd ../front
    npm install
    ```

## Configuration

### Backend
Le serveur Node.js est configuré pour se connecter à une base de données Azure SQL et gérer les requêtes API. La configuration de la base de données et d'Auth0 se fait via le fichier `.env`.

### Frontend
Le frontend en Vue.js communique avec le backend via des appels API pour afficher les produits, gérer les utilisateurs, et traiter les commandes.

## Fonctionnalités

- **Gestion des produits** : Ajout, suppression de produits.
- **Authentification et autorisation** : Connexion et inscription des utilisateurs via Auth0.
- **Gestion des commandes** : Passer des commandes.
- **Interface d'administration** : Gestion des produits et des commandes via une interface dédiée pour les administrateurs.

## API
Les communications entre le frontend et le backend se font via des appels API sécurisés.

### Endpoints Principaux

#### Produits :
- `GET /api/products` : Récupérer la liste des produits
- `POST /api/products` : Ajouter un nouveau produit (admin uniquement)
- `PUT /api/products/:id` : Modifier un produit existant (admin uniquement)
- `DELETE /api/products/:id` : Supprimer un produit (admin uniquement)

## Sécurité
- **Authentification** : Auth0 gère l'authentification des utilisateurs et des administrateurs.
- **Autorisation** : Seuls les administrateurs peuvent accéder aux routes de gestion des produits et des utilisateurs.
- **Protection des données** : Utilisation de TLS pour sécuriser les communications entre le frontend et le backend.

## Compte Administrateur
- **Email** : adflower44@gmail.com
- **Mot de passe** : admin44!!

## License
Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus d'informations.
