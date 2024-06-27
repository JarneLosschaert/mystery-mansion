<template>
  <div class="home content">
      <h2>What would you like to do?</h2>
      <Cards :cards="cards" />
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue';

export default {
  components: {
    Cards,
  },
  data() {
    return {
      cards: [
        {
          title: "Search a room",
          img: "/img/actions/search.jpg",
          route: "search",
        },
        {
          title: "Interrogate someone",
          img: "/img/actions/interrogate.jpg",
          route: "interrogate",
        },
        {
          title: "Find clues",
          img: "/img/actions/clues.jpg",
          route: "events",
        },
      ],
    };
  },

};
</script>

<style scoped>

</style>
