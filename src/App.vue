<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

#main {
  min-height: 90vh;
}

#header, #footer {
  height: 10vh;
}
</style>

