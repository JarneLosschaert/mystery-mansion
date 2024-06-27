<template>
  <div class="content">
    <router-link :to="backRoute">
      <p class="back">Go back</p>
    </router-link>

    <div v-if="!showResult">
      <h3>{{ heading }} {{ entity.name }}</h3>
      <ul>
        <li
          class="btn loupe"
          v-for="(action, index) in actions"
          :key="index"
          @click="displayResult(index)"
          :class="isActionDone(action.id)"
        >
          {{ actionText(action) }}
        </li>
      </ul>
    </div>

    <div v-if="showResult" class="result">
      <h3>{{ actions[selectedAction].text }}</h3>
      <p class="text" v-html="displayedResult"></p>
      <div v-if="hasSolution" class="solution">
        <input type="text" placeholder="Enter the solution" />
        <p class="btn loupe" @click="checkSolution">Check</p>
      </div>
      <p v-if="falseSolution" class="error">Wrong, try again</p>
      <p v-if="rightSolution" class="success">Good job!</p>
      <button class="btn" @click="anotherAction">{{ btnText }}</button>
    </div>

    <div>
      <img :src="img" :alt="entity.name" />
    </div>
  </div>
</template>

<script>
import stateService from "../services/stateService";

export default {
  props: {
    backRoute: String,
    fetchUrl: String,
    entityType: String,
    heading: String,
    btnText: String,
  },
  data() {
    return {
      state: [],
      entity: {},
      actions: [],
      img: "",
      showResult: false,
      selectedAction: 0,
      displayedResult: "",
      typingInterval: null,
      hasSolution: false,
      falseSolution: false,
      rightSolution: false,
    };
  },
  mounted() {
    this.loadEntity();
  },
  methods: {
    displayResult(index) {
      this.selectedAction = index;
      this.showResult = true;
      this.hasSolution = this.actions[index].solution ?? false;
      this.displayedResult = "";
      this.img = this.actions[index].img ?? this.entity.img;
      if (!this.hasSolution) {
        stateService.addAction(this.actions[index].id);
      }
      clearInterval(this.typingInterval);
      let result = this.actions[index].result;
      let currentIndex = 0;
      this.typingInterval = setInterval(() => {
        if (currentIndex < result.length) {
          this.displayedResult += result[currentIndex];
          currentIndex++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, 20);
    },
    anotherAction() {
      this.loadEntity();
      this.showResult = false;
      this.img = this.entity.img;
    },
    loadEntity() {
      fetch(this.fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          this.entities = data[this.entityType];
          this.entity = this.entities.find(
            (entity) => entity.id === parseInt(this.$route.params.id)
          );
          this.state = stateService.getState();
          this.actions = this.entity.actions;
          this.actions = this.actions.filter((action) => {
            const requires = action.requires || [];
            return requires.every((requiredAction) =>
              this.state.includes(requiredAction)
            );
          });
          this.img = this.entity.img;
        })
        .catch((error) => {
          console.error("Error fetching the JSON data:", error);
        });
    },
    isActionDone(actionId) {
      return this.state.includes(actionId) ? "done" : "";
    },
    checkSolution() {
      const solution = this.actions[this.selectedAction].solution;
      const input = document.querySelector("input").value;
      if (solution === input) {
        stateService.addAction(this.actions[this.selectedAction].id);
        this.rightSolution = true;
        setTimeout(() => {
          this.anotherAction();
          this.rightSolution = false;
        }, 2000);
      } else {
        this.falseSolution = true;
        setTimeout(() => {
          this.falseSolution = false;
        }, 2000);
      }
    },
    actionText(action) {
      return action.action;
    },
  },
  beforeDestroy() {
    clearInterval(this.typingInterval);
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
}

.content > div {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
}

.solution {
  display: flex;
  gap: 1rem;
}

input {
  height: fit-content;
}

h3 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

img {
  height: 70vh;
  border-radius: var(--border-radius);
}

ul {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

p {
  margin-bottom: 2rem;
}

.error {
  color: var(--error);
}

.success {
  color: var(--success);
}
</style>
