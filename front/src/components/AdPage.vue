<template>
  <div>
    <AdNavbarCard></AdNavbarCard>
    <iframe
      width="100%"
      height="600px"
      :src="powerBiEmbedUrl"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  </div>
</template>

<script>
import AdNavbarCard from './AdNavbarCard.vue';

export default {
  components: {
    AdNavbarCard,
  },
  data() {
    return {
      powerBiEmbedUrl: 'https://app.powerbi.com/reportEmbed?reportId=47c2eab5-9b06-45c6-b2a4-f0b527c31386&autoAuth=true&ctid=b9fec68c-c92d-461e-9a97-3d03a0f18b82',
      // Remplacez cette URL par celle que vous avez générée pour votre tableau de bord Power BI
    };
  },
};
</script>

<style scoped>
/* Ajoutez ici les styles pour votre composant */
</style>
