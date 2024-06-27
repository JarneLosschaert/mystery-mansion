<template>
  <div class="search content">
    <router-link to="/">
      <p class="back">Go back</p>
    </router-link>
    <h2>What room do you want to search?</h2>
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
      cards: [
        {
          title: "???",
          img: "book-room.jpg",
          route: "search",
        },
        {
          title: "???",
          img: "dining.jpg",
          route: "investigate",
        },
        {
          title: "???",
          img: "events.jpg",
          route: "events",
        },
      ],
    };
  },
  mounted() {
    fetch("/data/rooms.json")
      .then((response) => response.json())
      .then((data) => {
        this.rooms = data.rooms;
        this.cards = this.rooms.map((room) => {
          return {
            title: room.name,
            img: room.img,
            route: "search/" + room.id,
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
