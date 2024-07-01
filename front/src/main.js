import './assets/main.css';
import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue';
import router from './router'; // Chemin vers le fichier du routeur
import axios from 'axios';

const app = createApp(App);

// Configuration de l'URL de base pour Axios 
axios.defaults.baseURL = 'http://localhost:5173/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

try {
  app.use(
    createAuth0({
      domain: "dev-qu8po7wzxi3qc6om.us.auth0.com",
      clientId: "xWq2klm39umFkOUph3Itl1z7gtb9P88f",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );
} catch (error) {
  console.error('Erreur lors de l\'initialisation d\'Auth0 :', error);
}

app.use(router); 
app.mount('#app');
