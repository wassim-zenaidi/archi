const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const productRouter = require('./routes/adproducts'); // Importer le routeur des produits

const app = express();
const port = process.env.PORT || 5174; // Utilisation de process.env.PORT si défini, sinon 5174

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

let pool; // Déclaration du pool de connexion à la base de données

// Middleware pour analyser les requêtes JSON et configurer CORS
app.use(express.json());
app.use(cors()); // Permet toutes les origines

// Connexion à la base de données
async function connectDB() {
    try {
        pool = await sql.connect(dbConfig);
        console.log('Connecté à la base de données');
    } catch (err) {
        console.error('Erreur de connexion à la base de données:', err);
        process.exit(1); // Arrêter l'application en cas d'erreur de connexion
    }
}

// Appeler la fonction de connexion à la base de données
connectDB().catch(err => console.error('Erreur de connexion initiale:', err));

// Passer le pool de connexion au routeur des produits
app.use('/adproducts', productRouter(pool));
console.log('Routeur des produits monté sur /adproducts');

// Démarrage du serveur une fois connecté à la base de données
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});

// Exporter l'application Express et le pool de connexion pour être utilisés ailleurs
module.exports = { app, pool };
