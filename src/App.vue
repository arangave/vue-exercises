<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TheTitle from './components/TheTitle.vue';
import TheCounter from './components/TheCounter.vue';
import ParentComponent from './components/ParentComponent.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="7.8125rem" height="7.8125rem" />
    <div class="wrapper">
      <h1>Vue-Exercises</h1>
      <nav>
        <TheTitle>Título</TheTitle>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Catalogo">Catalogo</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <TheCounter :showDouble="true" />
    <ParentComponent />
    <RouterView />
  </main>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
  max-width: 10rem;
  width: 100%;
  height: auto;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.logo:hover {
  opacity: 1;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .logo {
    max-width: 7rem;
  }
}


.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  margin-top: 1rem;
}

nav a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border-left: 0.0625rem solid var(--color-border);
}

nav a:first-of-type {
  border-left: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 64rem) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 auto 1rem;
    align-self: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    margin-left: 0;
  }
}
</style>
