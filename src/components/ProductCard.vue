<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}>();

const addToCart = () => {
  alert(`Añadido a la cesta: ${props.title}`);
};
</script>

<template>
  <div class="product-card">
    <img :src="image" :alt="title" class="product-image" />
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <p class="product-price">€{{ price.toFixed(2) }}</p>
      <button @click="addToCart" class="add-button">Añadir a la cesta</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  border: 0.0625rem solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-0.2rem);
}

.product-image {
  width: 100%;
  max-width: 12.5rem;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
}

.product-info {
  text-align: center;
}

.product-title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: var(--color-text);
}

.product-description {
  font-size: 0.9rem;
  color: #414141;
  margin: 0.5rem 0;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-hover);
  margin: 0.5rem 0;
}

.add-button {
  padding: 0.5rem 1rem;
  background-color: var(--color-text);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.add-button:hover {
  background-color: var(--color-hover);
}
</style>
