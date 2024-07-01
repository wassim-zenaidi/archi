<template>
  <div>
    <AdNavbarCard></AdNavbarCard>

    <div class="manage-products-container">
      <!-- Formulaire de création de produit -->
      <div class="product-form">
        <h2>Créer un produit</h2>
        <form @submit.prevent="createProduct">
          <div class="form-group">
            <label>Nom du produit:</label>
            <input type="text" v-model="newProduct.name" required>
          </div>

          <div class="form-group">
            <label>Description:</label>
            <textarea v-model="newProduct.description" required></textarea>
          </div>

          <div class="form-group">
            <label>Prix:</label>
            <input type="number" v-model="newProduct.price" required>
          </div>

          <div class="form-group">
            <label>Stock:</label>
            <input type="number" v-model="newProduct.stock" required>
          </div>

          <div class="form-group">
            <label>Numéro:</label>
            <input type="text" v-model="newProduct.number" required>
          </div>

          <button type="submit">Créer le produit</button>
        </form>
      </div>

      <!-- Liste des produits -->
      <div class="product-list">
        <h2>Liste des produits</h2>
        <div class="scrollable-list">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Numéro</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.number }}</td>
                <td>
                  <button class="modify-button" @click="updateProduct(product.id)">Modifier</button>
                  <button class="delete-button" @click="deleteProduct(product.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '../services/products';
import AdNavbarCard from './AdNavbarCard.vue';

export default {
  components: {
    AdNavbarCard,
  },
  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        price: null,
        stock: null,
        number: ''
      },
      products: []  // Tableau pour stocker les produits récupérés
    };
  },
  async mounted() {
    await this.fetchProducts(); // Appel pour récupérer les produits lors du montage du composant
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await productService.getAllProducts();
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        alert('Erreur lors de la récupération des produits');
      }
    },
    async createProduct() {
      try {
        await productService.addProduct(this.newProduct);
        alert('Produit créé avec succès!');
        await this.fetchProducts(); // Après création, rafraîchir la liste des produits
        this.clearForm();
      } catch (error) {
        console.error('Erreur lors de la création du produit:', error);
        alert('Erreur lors de la création du produit');
      }
    },
    async updateProduct(productId) {
      // Logique pour la mise à jour d'un produit
    },
    async deleteProduct(productId) {
      try {
        await productService.deleteProduct(productId);
        alert('Produit supprimé avec succès!');
        await this.fetchProducts(); // Rafraîchir la liste des produits après suppression
      } catch (error) {
        console.error(`Erreur lors de la suppression du produit avec ID ${productId}:`, error);
        alert('Erreur lors de la suppression du produit');
      }
    },
    clearForm() {
      this.newProduct = {
        name: '',
        description: '',
        price: null,
        stock: null,
        number: ''
      };
    }
  }
};
</script>


<style scoped>
.manage-products-container {
  padding: 20px;
  margin-top: 20px; /* Espacement supplémentaire par rapport à la navbar */
  display: flex;
  justify-content: center; /* Centre le contenu horizontalement */
  align-items: flex-start; /* Aligne les éléments en haut de la page */
  gap: 20px; /* Espacement entre les boîtes */
}

.product-form {
  width: 100%;
  max-width: 600px;
  padding: 10px; /* Réduire le padding */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #262525;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.form-group {
  margin-bottom: 5px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
}

input[type="text"],
input[type="number"],
textarea {
  width: calc(100% - 20px); /* Compenser le padding */
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: white;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #6050dc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #b18366;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.product-list {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0px;
  overflow: hidden; /* Cache le défilement horizontal */
  background-color: #262525;
  color: white;
  text-align: center;
}

.scrollable-list {
  max-height: 450px; /* Hauteur maximale avec défilement vertical */
  overflow-y: auto; /* Défilement vertical si nécessaire */
}

table {
  width: 95%;
  border-collapse: collapse;
  margin-top: 5px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #6050dc;
  color: white;
  text-align: center; /* Centrer le texte dans les cellules d'en-tête */
}

.modify-button,
.delete-button {
  background-color: transparent;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 13px;
  border-radius: 4px;
}

.modify-button {
  background-color: #4CAF50; /* Vert pour le bouton Modifier */
}

.delete-button {
  background-color: #f44336; /* Rouge pour le bouton Supprimer */
}

.modify-button:hover {
  background-color: #45a049; /* Vert plus foncé au survol */
}

.delete-button:hover {
  background-color: #da190b; /* Rouge plus foncé au survol */
}
</style>
