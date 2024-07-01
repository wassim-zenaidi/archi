const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const productRouter = require('./routes/adproducts'); // Importer le routeur des produits

const app = express();
const port = 5174;

// Chaîne de connexion à SQL Server
const dbConfig = {
    user: 'ptk',
    password: 'Payetonkawa44',
    server: 'ptk-serv.database.windows.net',
    database: 'ptk',
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

// Middleware pour analyser les requêtes JSON et configurer CORS
app.use(express.json());
app.use(cors()); // Permet toutes les origines

let pool; // Déclaration du pool de connexion à la base de données

// Connexion à la base de données
sql.connect(dbConfig).then(dbPool => {
    pool = dbPool;
    if (pool.connecting) {
        console.log('Connexion à la base de données en cours...');
    }
    if (pool.connected) {
        console.log('Connecté à la base de données');
    }

    // Passer le pool de connexion au routeur des produits
    app.use('/adproducts', productRouter(pool));
    console.log('Routeur des produits monté sur /adproducts');

    // Démarrage du serveur une fois connecté à la base de données
    app.listen(port, () => {
        console.log(`Serveur en écoute sur le port ${port}`);
    });
}).catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
});

// Exporter l'application Express et le pool de connexion pour être utilisés ailleurs
module.exports = { app, pool };
