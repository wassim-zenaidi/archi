<template>
    <div>
    
        <NavbarCard></NavbarCard>
  
      <div class="product-view">
        <div class="product-details">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="details">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">{{ product.price }}</p>
            <p class="product-stock">En stock: {{ product.stock }}</p>
            <div class="quantity-input">
              <label for="quantity">Quantité: </label>
              <input type="number" id="quantity" v-model="quantity" min="1" :max="product.stock">
            </div>
            <div class="buyer-info">
              <h3>Informations de l'acheteur</h3>
              <form @submit.prevent="buyProduct">
                <div class="form-group">
                  <label for="firstName">Prénom: </label>
                  <input type="text" id="firstName" v-model="buyer.firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Nom: </label>
                  <input type="text" id="lastName" v-model="buyer.lastName" required>
                </div>
                <div class="form-group">
                  <label for="email">Email: </label>
                  <input type="email" id="email" v-model="buyer.email" required>
                </div>
                <button type="submit" class="buy-button">Acheter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarCard from './NavbarCard.vue';
  
  export default {
    name: "ProductPage",
    components: {
      NavbarCard
    },
    data() {
      return {
        product: {
          name: "Café Arabica",
          image: "src/img/cafe1.webp",
          description: "Café Arabica pur, doux et aromatique.",
          price: "$12.99",
          stock: 10,
        },
        quantity: 1,
        buyer: {
          firstName: '',
          lastName: '',
          email: ''
        }
      };
    },
    methods: {
      buyProduct() {
        // Vous pouvez gérer ici la logique d'achat, comme envoyer les données au backend
        console.log('Acheter:', this.product.name, 'Quantité:', this.quantity, 'Acheteur:', this.buyer);
        // Exemple : Redirection vers une page de confirmation ou ajout au panier
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles pour la barre de navigation */
  .navbar {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  /* Styles pour la vue du produit */
  .product-view {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    color : #fff;
    background-color: #f4f4f4; /* Couleur de fond pour le produit */
    padding: 20px 0; /* Espacement haut et bas */
  }
  
  .product-details {
    display: flex;
    gap: 20px;
    max-width: 1200px; /* Limiter la largeur maximale du contenu */
    width: 90%; /* Largeur relative par rapport à son parent */
    margin: 0 auto; /* Centrer le contenu */
    background-color: #262525; /* Couleur de fond pour le détail du produit */
    padding: 20px; /* Espacement intérieur */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
    border-radius: 8px; /* Coins arrondis */
  }
  
  .product-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  
  .details {
    flex: 1;
  }
  
  .product-name {
    font-size: 2rem; /* Taille de police pour le nom du produit */
    margin-bottom: 10px;
    color: #fff; /* Couleur du texte */
  }
  
  .product-description {
    font-size: 1.2rem; /* Taille de police pour la description */
    margin-bottom: 15px;
    color: #fff; /* Couleur du texte */
  }
  
  .product-price {
    font-size: 1.4rem; /* Taille de police pour le prix */
    font-weight: bold;
    color: #b18366; /* Couleur du texte */
    margin-bottom: 10px;
  }
  
  .product-stock {
    font-size: 1.1rem; /* Taille de police pour le stock */
    color: #fff; /* Couleur du texte */
    margin-bottom: 10px;
  }
  
  .quantity-input {
    margin-bottom: 20px; /* Espacement bas pour l'entrée de quantité */
  }
  
  .buyer-info {
    margin-top: 30px; /* Espacement haut pour les informations de l'acheteur */
  }
  
  .form-group {
    margin-bottom: 15px; /* Espacement entre les champs du formulaire */
  }
  
  .buy-button {
    background-color: #b18366; /* Couleur de fond du bouton */
    color: white; /* Couleur du texte */
    border: none;
    padding: 15px 30px; /* Espacement intérieur */
    border-radius: 5px; /* Coins arrondis */
    cursor: pointer;
    font-size: 1.2rem; /* Taille de police */
    transition: background-color 0.3s ease; /* Animation de transition */
  }
  
  .buy-button:hover {
    background-color: #b18366; /* Couleur de fond au survol */
  }
</style>

