<template>
  <div>
    <NavbarCard></NavbarCard>
    
    <ProductView></ProductView>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';
import ProductView from './ProductView.vue';

export default {
  components: {
    NavbarCard,
    ProductView,
  },
};
</script>

<style scoped>
</style>
