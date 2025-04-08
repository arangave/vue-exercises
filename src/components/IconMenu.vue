<script setup lang="ts">
import { ref } from 'vue';

const socialIcons = ref([
  { name: 'Facebook', iconClass: 'fab fa-facebook-f', link: 'https://www.facebook.com' },
  { name: 'Twitter', iconClass: 'fab fa-twitter', link: 'https://www.twitter.com' },
]);
</script>

<template>
  <div class="icon-menu">
    <a
      v-for="icon in socialIcons"
      :key="icon.name"
      :href="icon.link"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
    >
      <i :class="icon.iconClass"></i>
    </a>
  </div>
</template>

<style scoped>
.icon-menu {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.social-icon {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: var(--color-hover);
}
</style>

