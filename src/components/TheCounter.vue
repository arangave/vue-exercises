<script setup lang="ts">
import { computed } from 'vue';
import { useCounter } from '../composables/useCounter';

const { counter, increment, decrement } = useCounter();

const counterClass = computed(() => ({
  'counter-value': true,
  'counter-max': counter.value === 10,
}));
</script>

<template>
  <div class="counter">
    <p :class="counterClass">Cantidad: {{ counter }}</p>
    <div class="button-group">
      <button v-if="counter > 0" @click="decrement" class="custom-button">-</button>
      <button v-if="counter < 10" @click="increment" class="custom-button">+</button>

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

.counter-max {
  color: green;
  font-weight: bold;
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
