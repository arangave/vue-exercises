<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from './components/TheTitle.vue'
import TheCounter from './components/TheCounter.vue'
import ParentComponent from './components/ParentComponent.vue'
import IconMenu from './components/IconMenu.vue'
</script>

<template>
  <header>
    <div class="menu">
      <div class="logo-container">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      </div>
      <nav>
        <IconMenu />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Catalogo">Catalogo</RouterLink>

      </nav>
    </div>
  </header>

  <main>
    <TheTitle>Titulo</TheTitle>
    <TheCounter :showDouble="true" />
    <ParentComponent />
    <RouterView />
  </main>
</template>

<style>
header {
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 3rem;
  height: auto;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

nav a:hover {
  background-color: #fffafa;
  color: #24a647;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: var(--color-hover);
}

@media (max-width: 600px) {
  .menu {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  nav {
    margin-top: 0.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .logo {
    width: 2.5rem;
  }
}

/* Título centrado */
main {
  text-align: center;
  padding: 1rem;
}
</style>
