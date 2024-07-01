<template>
  <div>
    <NavbarCard></NavbarCard>
    <div class="contact-page">
      <div class="contact-info">
        <h1>Nous Contacter</h1>
        <p>Nous sommes ravis de vous accueillir sur notre site de ventes de cafés !</p>
        <p>Ce site a été créé dans le cadre d'un projet MSPR pour l'école EPSI.</p>
        <p>N'hésitez pas à nous contacter pour toute question, suggestion ou demande d'information :</p>
        <p>Email : payetonkawa44@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  components: {
    NavbarCard,
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.contact-info {
  text-align: center;
}

.contact-info h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none; /* Supprime le soulignement du lien */
}
</style>
