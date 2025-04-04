<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>Vue Exercises</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  padding: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  margin-top: 1rem;
}

nav a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border-left: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin-right: 1rem;
  }

  nav {
    margin-left: 1rem;
  }
}
</style>

