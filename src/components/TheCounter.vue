<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from './TheTitle.vue'

const counter = ref(0)
const increment =() =>{
  if (counter.value<10)counter.value++;
}

const decrement=()=>{
  if (counter.value>0)counter.value--;
}

</script>

<template>
  <div class="counter">
    <TheTitle>Contador</TheTitle>
    <p class="counter-value">Valor: {{ counter }}</p>
    <div class="button-group">
      <button v-if="counter > 0" @click="decrement" class="custom-button">Decrement</button>
      <button v-if="counter < 10" @click="increment" class="custom-button">Increment</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
  padding: 1em;
  border: 0.125em solid var(--color-border);
  border-radius: 0.5em;
  background-color: #fff;
}

.counter-value {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.button-group {
  display: flex;
  gap: 1em;
}

button {
  padding: 0.5em 1em;
  border: none;
  background-color: var(--color-text);
  color: #fff;
  border-radius: 0.25em;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-hover);
}

button:active {
  transform: scale(0.95);
}
@media (max-width: 600px) {
  .counter {
    padding: 0.75em;
    font-size: 0.9em;
  }

  .button-group {
    flex-direction: column;
    gap: 0.5em;
  }

  .custom-button {
    width: 100%;
    padding: 0.75em;
    font-size: 1em;
  }

  .counter-value {
    font-size: 1.2em;
  }
}
</style>
