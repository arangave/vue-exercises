<script setup lang="ts">
import { ref, inject } from 'vue'

const emit = defineEmits(['greet'])
const buttonVisible = ref(true)
const parentMessage = inject<string>('parentMessage')

const sendGreeting = () => {
  emit('greet', 'Mensaje de Hijo: ¡Hola desde el componente hijo!')
  buttonVisible.value = false
}
</script>

<template>
  <div class="child">
    <h3>Componente Hijo</h3>
    <p>{{ parentMessage }}</p>
    <button v-if="buttonVisible" @click="sendGreeting">Saludar al Padre</button>
  </div>
</template>

<style scoped>
.child {
  text-align: center;
  margin: 1em;
  padding: 1em;
  border: 0.0625rem solid var(--color-border);
  border-radius: 0.5em;
  background-color: #fff;
}

button {
  padding: 0.5em 1em;
  background-color: var(--color-hover);
  color: #fff;
  border: none;
  margin-top: 1em;
  border-radius: 0.25em;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-text);
}

p {
  font-size: 1.2em;
  margin: 0.5em 0;
}
</style>
