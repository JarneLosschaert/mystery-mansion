<template>
  <div class="interrogate content">
    <router-link to="/">
      <p class="back">Go back</p>
    </router-link>
    <h2>Who do you want to interrogate?</h2>
    <Cards :cards="cards" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  components: {
    Cards,
  },
  data() {
    return {
      characters: [],
      cards: [],
    };
  },
  mounted() {
    fetch("/data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        this.characters = data.characters;
        this.cards = this.characters.map((character) => {
          return {
            title: `${character.name} (${character.profession})`,
            img: character.img,
            route: "interrogate/" + character.id,
          };
        });
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  },
};
</script>

<style scoped></style>
