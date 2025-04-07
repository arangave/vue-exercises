<script setup lang="ts">
import { computed, defineProps, watch, ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const props = defineProps({
  showDouble: {
    type: Boolean,
    default: true,
  },
})

const counterStore = useCounterStore()

const counterDouble = computed(() => counterStore.count * 2)
const counterMessage = ref('')

const updateMessage = () => {
  if (counterStore.count === 0) {
    counterMessage.value = 'Estás en el valor mínimo'
  } else if (counterStore.count === 10) {
    counterMessage.value = 'Estás en el valor máximo'
  } else {
    counterMessage.value = 'Estás en los parámetros adecuados'
  }
}

updateMessage()

watch(() => counterStore.count, () => {
  updateMessage()
})

const counterClass = computed(() => ({
  'counter-value': true,
  'counter-max': counterStore.count === 10,
}))
</script>

<template>
  <div class="counter">
    <h3>{{ counterMessage }}</h3>
    <p :class="counterClass">Cantidad: {{ counterStore.count }}</p>
    <p v-if="props.showDouble" class="counter-double">Doble: {{ counterDouble }}</p>
    <div class="button-group">
      <button v-if="counterStore.count < 10" @click="counterStore.increment" class="custom-button">+</button>
      <button v-if="counterStore.count > 0" @click="counterStore.decrement" class="custom-button">-</button>
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

h3 {
  font-size: 1.2rem;
  margin: 0.5rem;
  color: var(--color-hover);
}

.counter-value {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.counter-double {
  font-size: 1rem;
  color: var(--color-hover);
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
