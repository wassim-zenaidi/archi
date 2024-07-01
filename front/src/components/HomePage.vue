<template>
  <div>
    <NavbarCard></NavbarCard>
    <main>
      <section class="welcome-section">
        <div class="banner-overlay">
          <div class="banner-text"> 
            <h1>Hello🌷</h1>
            <p>Découvrez notre sélection de fleurs</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  name: "HomePage",
  components: {
    NavbarCard,
  },
};
</script>

<style scoped>
/* Styles CSS pour la bannière noire avec texte */
.banner-overlay {
  position: relative;
  margin-top: 80px;
  width: 100%;
  height: 300px; /* Hauteur ajustée selon votre besoin */
  background-color: #333; /* Fond noir */
  display: flex;
  justify-content: center; /* Centre le contenu horizontalement */
  align-items: center; /* Centre le contenu verticalement */
}

.banner-text {
  font-size: 3rem;
  color: rgb(192, 79, 109);
  text-align: center;
  z-index: 1; /* Place le texte au-dessus de la bannière */
}
</style>
