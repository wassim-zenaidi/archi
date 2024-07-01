<template>
  <div class="customerpage">
    <AdNavbarCard></AdNavbarCard>
    <div class="container">
    <div v-if="loading" class="box">Chargement...</div>
    <div v-if="error" class="box">{{ error }}</div>
    <div v-if="customers.length" class="box">
      <ul>
        <li v-for="customer in customers" :key="customer.id">
          {{ customer.first_name }} {{ customer.last_name }} ({{ customer.mail }})
        </li>
      </ul>
    </div>
</div>
  </div>
</template>

  
  <script>
  import AdNavbarCard from './AdNavbarCard.vue';
  import getCustomers from '@/services/customerService';
  
  export default {
    components: {
      AdNavbarCard,
    },
    data() {
      return {
        customers: [],
        loading: true,
        error: null,
      };
    },
    async created() {
      try {
        this.customers = await getCustomers();
      } catch (err) {
        this.error = 'Erreur lors de la récupération des données';
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  
  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f0f0;
}
  .box {
    background-color: #333;
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
    margin: 10px 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px 0;
    border-bottom: 1px solid #444;
  }
  
  li:last-child {
    border-bottom: none;
  }
  </style>
  