<script setup lang="ts">

import TheTitle from '../components/TheTitle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCatalogo = () => {
  router.push('/catalogo');
};
</script>

<template>
  <div class="home-view">
    <TheTitle>Página de Inicio</TheTitle>

    <button @click="goToCatalogo">Ir al Catálogo</button>
  </div>
</template>

<style scoped>
.home-view {
  text-align: center;
  padding: 2em;
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
</style>
