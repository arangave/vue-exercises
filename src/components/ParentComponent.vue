<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const greeting = ref('');

const handleGreeting = (message: string) => {
  greeting.value = message;
};
</script>

<template>
  <div class="parent">
    <h2>Componente Padre</h2>
    <p>{{ greeting }}</p>
    <ChildComponent @greet="handleGreeting" />
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

p {
  margin: 1em 0;
  font-size: 1.2em;
}
</style>
