<script setup lang="ts">
import { useCounter } from '../composables/useCounter.ts';

const { counter, increment, decrement } = useCounter();
</script>

<template>
  <div class="counter">
    <p class="counter-value">Cantidad: {{ counter }}</p>
    <div class="button-group">
      <button v-if="counter < 10" @click="increment" class="custom-button">+</button>
      <button v-if="counter > 0" @click="decrement" class="custom-button">-</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
}

.counter-value {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.custom-button {
  padding: 0.5rem;
  border: none;
  background-color: var(--color-text);
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
}

.custom-button:hover {
  background-color: var(--color-hover);
}
</style>
