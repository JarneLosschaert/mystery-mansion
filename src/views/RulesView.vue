<template>
  <div class="rules content">
    <h2>Rules</h2>
    <ul class="text">
      <li>
        Players will be divided into <span>teams of two</span>. Each team will
        work together to solve the mystery.
      </li>
      <li>
        Teams can <span>search rooms</span> for clues or
        <span>interrogate characters</span> to gather information.
      </li>
      <li>
        Teams must <span>solve puzzles</span> to unlock new clues and progress
        in the investigation.
      </li>
      <li>
        <span>Accusations</span> can only be made after all rooms have been
        searched and all clues have been presented.
      </li>
      <li>
        No use of <span>AI tools</span>, such as ChatGPT, is allowed during the
        investigation.
      </li>
      <li>
        You can ask for <span>hints</span>, but your team will get a
        <span>time penalty</span>.
      </li>
      <li>
        The first team to solve the mystery <span>wins a big prize</span>!
      </li>
      <li><span>Good luck</span> and enjoy the challenge!</li>
    </ul>
    <router-link to="/">
      <p class="btn loupe">Start investigation</p>
    </router-link>
    <p class="btn reset" @click="resetGame">Reset game</p>
  </div>
</template>

<script>
import stateService from "../services/stateService";
export default {
  methods: {
    resetGame() {
      stateService.resetState();
    },
  },
};
</script>

<style scoped>
a,
.btn {
  margin: 2rem auto 0 auto;
  width: fit-content;
}

ul {
  list-style-type: circle;
  margin: auto;
}

li {
  margin: 0.5rem 0;
}

.reset {
  margin-right: 0;
}
</style>
