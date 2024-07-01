<template>
  <div>
    <div v-if="isAuthenticated">
      <button v-if="!isSpecialUser" class="auth-button cart" @click="viewCart">🛒 ({{ cartItems.length }})</button>
      <button @click="logout" class="auth-button logout">Logout 👥</button>
    </div>
    <div v-else>
      <button @click="login" class="auth-button login">Espace client 👥</button>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "AuthCard",
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    const cartItems = ref([]); // Exemple d'état du panier
    const router = useRouter();

    // Vérifier si l'utilisateur est l'utilisateur spécifique
    const isSpecialUser = computed(() => isAuthenticated.value && user.value && user.value.sub === 'google-oauth2|108805079080583966284');

    // Redirection automatique si l'utilisateur est admin
    watch(isSpecialUser, (isSpecial) => {
      if (isSpecial) {
        router.push('/AdPage');
      }
    });

    const viewCart = () => {
      // Logique pour afficher le contenu du panier
      console.log('View Cart');
    };

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout();
      },
      user,
      isAuthenticated,
      cartItems,
      viewCart,
      isSpecialUser,
    };
  },
};
</script>

<style scoped>
/* Styles pour les boutons de connexion et de déconnexion */
.auth-button {
  background-color: #fff; /* Couleur de fond */
  color: #262525; /* Couleur du texte */
  border: none; /* Pas de bordure */
  padding: 10px 20px; /* Remplissage */
  font-size: 1rem; /* Taille de police */
  cursor: pointer; /* Curseur de la souris */
  border-radius: 3px;
  margin-right: 10px; /* Espacement entre les boutons */
  text-decoration: none; /* Retirer la décoration de lien par défaut */
  display: inline-block; /* Assurer que le bouton se comporte comme un bloc en ligne */
}

.auth-button:hover {
  background-color: #b18366;
  color: #fff; /* Changement de couleur au survol */
}

.cart {
  background-color: #fff; /* Couleur de fond */
  color: #262525; /* Couleur du texte */
  border: 1px solid #262525; /* Bordure légère */
}

.cart:hover {
  background-color: #b18366;
  color: #fff; /* Changement de couleur au survol */
}

.login,
.logout {
  background-color: #fff;
  color: #262525;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;
}

.login:hover,
.logout:hover {
  background-color: #b18366;
  color: #fff;
}
</style>
