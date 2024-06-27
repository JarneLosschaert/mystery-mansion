<template>
  <Actions
    backRoute="/interrogate"
    fetchUrl="/data/characters.json"
    entityType="characters"
    heading="Questions for"
    btnText="Ask another question"
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
