<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['greet'])

const sendGreeting = () => {
  emit('greet', 'Hola desde componente hijo!')
}
</script>

<template>
  <div class="child">
    <h3>Componente Hijo</h3>
    <button @click="sendGreeting">Saludar al Padre</button>
  </div>
</template>

<style scoped>
.child {
  text-align: center;
  margin: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: var(--color-hover);
  color: #fff;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-text);
}
</style>
