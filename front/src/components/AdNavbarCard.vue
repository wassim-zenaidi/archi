<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/AdPage">Dashboard</router-link></li>
          <li><router-link to="/ManageProducts">Inventaires</router-link></li>
          <li><router-link to="/CustomerPage">Clients</router-link></li>
        </ul>
      </nav>
       <AuthCard></AuthCard>
    </header>
  </template>
  
  <script>

  import AuthCard from './AuthCard.vue';
  
  export default {
    components: {
      AuthCard
    }
  };
  </script>
  
  <style scoped>
 
  header {
    background-color: #6050dc;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .logo {
    font-size: 1.5rem;
    color: #fff;
  }
  
  nav ul {
    list-style-type: none;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #f3e5d9;
  }
  
  .user-options a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    margin-left: 10px;
  }
  
  .user-options a:hover {
    color: #f3e5d9;
  }
  </style>
  