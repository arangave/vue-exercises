<script setup lang="ts">

</script>

<template>
<h2 class="title">
    <slot>Default Title</slot>
  </h2>
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
