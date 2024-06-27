<template>
  <router-link :to="card.route">
    <div class="card">
      <img :src="card.img" :alt="card.title" />
      <div class="card-body">
        <h3>{{ card.title }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--primary);
  border-radius: var(--border-radius);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.card h3 {
  color: var(--text-secondary);
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;
}

img {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  border-radius: var(--border-radius);
}
</style>
