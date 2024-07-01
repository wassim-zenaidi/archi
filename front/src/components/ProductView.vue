<template>
  <div class="container">
    <div class="product-view">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: "ProductView",
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.container {
  height: 80vh; /* Hauteur de 100% de la fenêtre visible */
  display: flex;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */
}

.product-view {
  width: 80%; /* Largeur ajustée */
  max-width: 1200px; /* Largeur maximale pour s'adapter aux grands écrans */
  border-radius: 8px; /* Coins arrondis */
  padding: 20px; /* Espace intérieur */
  overflow-y: auto; /* Ajoute un défilement vertical si nécessaire */
  scrollbar-width: none; /* Masque la largeur du défilement */
  -ms-overflow-style: none; /* Masque la barre de défilement pour IE et Edge */
  height: fit-content; /* Hauteur ajustée au contenu */
  margin: auto; /* Centre le contenu horizontalement */
}

/* Style pour le défilement vertical */
.product-view::-webkit-scrollbar {
  display: none; /* Masque le défilement pour les navigateurs WebKit (Chrome, Safari, etc.) */
}
</style>
