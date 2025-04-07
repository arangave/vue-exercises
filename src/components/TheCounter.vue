<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useCounter } from '../composables/useCounter'

const props = defineProps({
  showDouble: {
    type: Boolean,
    default: true,
  },
})

const { counter, increment, decrement } = useCounter()

const counterDouble = computed(() => counter.value * 2)

const counterClass = computed(() => ({
  'counter-value': true,
  'counter-max': counter.value === 10,
}))
</script>

<template>
  <div class="counter">
    <p :class="counterClass">Cantidad: {{ counter }}</p>

    <p v-if="props.showDouble" class="counter-double">Doble: {{ counterDouble }}</p>
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

.counter-max {
  color: green;
  font-weight: bold;
}

.double-value {
  font-size: 1.2rem;
  color: var(--color-hover);
  margin: 0.2rem 0;
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
