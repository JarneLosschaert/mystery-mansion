<template>
    <header>
        <router-link to="/" class="logo">
          <h1>Mystery Mansion</h1>
        </router-link>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/rules">Rules</router-link>
          <router-link to="/welcome">Welcome</router-link>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  header {
    height: 100%;;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    background-color: var(--secondary);
  }
  
  h1 {
    font-size: 2rem;
  }
  
  nav {
    display: flex;
  }
  
  nav a {
    margin-left: 1.5rem;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  