<template>
  <Actions
    backRoute="/search"
    fetchUrl="/data/rooms.json"
    entityType="rooms"
    heading="Search"
    btnText="Search for more clues"
  />
</template>

<script>
import Actions from "@/components/Actions.vue";

export default {
  components: {
    Actions,
  },
};
</script>
