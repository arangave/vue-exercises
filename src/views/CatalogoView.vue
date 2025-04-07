<script setup lang="ts">
import { products } from '../data/mock';
import ProductCard from '../components/ProductCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="catalogo">
    <h2>Catálogo de Productos</h2>
    <button @click="goToHome">Volver a Inicio</button>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
      />
    </div>
  </div>
</template>

<style scoped>
.catalogo {
  padding: 2em;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
}

button {
  padding: 0.5em 1em;
  background-color: var(--color-text);
  color: #fff;
  border: none;
  margin: 1em 0;
  border-radius: 0.25em;
  cursor: pointer;
}
</style>
