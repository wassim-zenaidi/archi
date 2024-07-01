<template>
  <div class="purchase-page">
    <h1>{{ cafe.name }}</h1>
    <img :src="cafe.image" :alt="cafe.name" class="cafe-image">
    <p>{{ cafe.description }}</p>
    <p class="cafe-price">Prix: {{ cafe.price }}</p>
    <button @click="confirmPurchase">Confirmer l'achat</button>
  </div>
</template>

<script>
export default {
  name: "PurchasePage",
  data() {
    return {
      cafe: {}
    };
  },
  created() {
    console.log('Route params:', this.$route.params.cafe);
    this.cafe = this.$route.params.cafe || {};
  },
  methods: {
    confirmPurchase() {
      console.log('Achat confirmé pour:', this.cafe);
    }
  }
};
</script>

<style scoped>
.purchase-page {
  text-align: center;
  padding: 20px;
}

.cafe-image {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.cafe-price {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
