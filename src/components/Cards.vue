<template>
  <div class="cards">
    <Card v-for="card in cards" :card="card"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  props: {
    cards: Array,
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem 0;
}
</style>
