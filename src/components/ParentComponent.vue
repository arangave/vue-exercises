<script setup lang="ts">
import { ref, provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

const greeting = ref('');
const parentMessage = ref('');
const buttonVisible = ref(true);

const sendMessageToChild = () => {
  parentMessage.value = 'Mensaje de Padre: ¡Hola desde el componente padre!';
  buttonVisible.value = false;
};

provide('parentMessage', parentMessage);
</script>

<template>
  <div class="parent">
    <h2>Componente Padre</h2>
    <p> {{ greeting }}</p>
    <button v-if="buttonVisible" @click="sendMessageToChild">Saludar al Hijo</button>
    <ChildComponent @greet="greeting = $event" />
  </div>
</template>

<style scoped>
.parent {
  text-align: center;
  margin: 2em;
  padding: 1em;
  border: 0.0625rem solid var(--color-border);
  border-radius: 0.5em;
  background-color: #f4f4f4;
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
  margin: 1em 0;
  font-size: 1.2em;
}
</style>
