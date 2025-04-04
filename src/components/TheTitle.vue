<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ propTitle: string }>()
</script>

<template>
  <h2 class="title">{{ propTitle }}</h2>
</template>

<style scoped>
.title {
  font-size: 2rem;
  color: var(--color-hover);
  text-align: center;
  margin: 1rem 0;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.5rem;
}
</style>
