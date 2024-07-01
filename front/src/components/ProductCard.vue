<template>
  <div class="gallery">
    <div v-for="(product) in products" :key="product.id" class="cafe-item" :class="{ 'out-of-stock': product.stock === 0 }">
      <img :src="product.image" :alt="product.name" class="cafe-image">
      <div class="cafe-details">
        <h2 class="cafe-name">{{ product.name }}</h2>
        <p class="cafe-description">{{ product.description }}</p>
        <div class="cafe-price-stock">
          <p class="cafe-price">{{ product.price }} €</p> <!-- Ajout de "€" après le prix -->
          <p class="cafe-stock" :class="{ 'out-of-stock': product.stock === 0 }">
            En stock: {{ product.stock }}
          </p>
        </div>
        <div class="button-group">
          <button @click="openPurchaseModal(product)" class="buy-button" :disabled="product.stock === 0">
            Acheter
          </button>
        </div>
      </div>
    </div>

    <!-- Modal pour la sélection de la quantité -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Choisissez la quantité à acheter :</h3>
        <input type="number" v-model.number="quantity" min="1" :max="selectedProduct.stock">
        <div class="modal-buttons">
          <button @click="closeModal">Annuler</button>
          <button @click="confirmPurchase">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProductCard",
  data() {
    return {
      products: [],  // Initialisation vide pour les données de produits
      showModal: false,
      selectedProduct: null,
      quantity: 1,
    };
  },
  async mounted() {
    try {
      // Appel à votre API backend pour récupérer les produits
      const response = await axios.get('http://localhost:5174/adproducts');
      this.products = response.data; // Mettre à jour les produits avec les données reçues
    } catch (error) {
      console.error('Erreur lors de la récupération des produits depuis le backend:', error);
      alert('Erreur lors de la récupération des produits');
    }
  },
  methods: {
    openPurchaseModal(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async confirmPurchase() {
      try {
        const productId = this.selectedProduct.id;
        const newStock = this.selectedProduct.stock - this.quantity;

        if (newStock < 0) {
          alert('Stock insuffisant.');
          return;
        }

        // Effectuer l'achat via une API backend, par exemple avec une requête POST ou PUT
        const response = await axios.put(`http://localhost:5174/adproducts/${productId}`, {
          stock: newStock
        });

        if (response.status === 200) {
          alert(`Achat de ${this.quantity} ${this.selectedProduct.name}(s) effectué.`);
          this.selectedProduct.stock = newStock; // Mettre à jour localement le stock du produit
          this.closeModal();
        } else {
          alert('Erreur lors de l\'achat.');
        }
      } catch (error) {
        console.error('Erreur lors de l\'achat du produit:', error);
        alert('Erreur lors de l\'achat du produit');
      }
    },
  },
};
</script>

<style scoped>
/* Styles pour la galerie */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}

/* Style pour chaque élément de café */
.cafe-item {
  border: 1px solid #262525;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cafe-item:hover {
  transform: translateY(-5px);
}

/* Style pour l'image du café */
.cafe-image {
  width: 100%;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
  object-fit: cover; /* Réduire l'image en conservant son ratio */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Style pour les détails du café */
.cafe-details {
  padding: 5px;
  background-color: #262525;
}

/* Style pour le nom du café */
.cafe-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #ffffff;
}

/* Style pour la description du café */
.cafe-description {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px;
}

/* Style pour le prix et le stock du café */
.cafe-price-stock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cafe-price {
  font-weight: bold;
  color: #cfa78e;
  font-size: 1.1rem;
}

.cafe-stock {
  color: #cfa78e;
  font-size: 0.9rem;
}

.cafe-stock.out-of-stock {
  color: red;
}

/* Style pour le groupe de boutons */
.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

/* Style pour le bouton acheter */
.buy-button {
  background-color: #cfa78e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none; /* Supprime le soulignement du lien */
  display: inline-block; /* Rend le bouton prendre la largeur du texte */
  outline: none; /* Supprime la bordure par défaut */
}

.buy-button:disabled {
  background-color: #ccc; /* Couleur de fond grise pour le bouton désactivé */
  cursor: not-allowed; /* Curseur interdit */
}

.buy-button:hover:disabled {
  background-color: #ccc; /* Au survol, la couleur reste grise */
}

.buy-button:hover {
  background-color: #b58976;
}

/* Style pour la modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.modal h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.modal input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}

.modal-buttons button {
  background-color: #cfa78e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.modal-buttons button:hover {
  background-color: #b58976;
}
</style>
