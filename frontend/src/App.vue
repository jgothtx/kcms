<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <h2>Contract Manager</h2>
      <nav>
        <RouterLink to="/contracts">Contracts</RouterLink>
        <RouterLink to="/upload">Upload</RouterLink>
        <RouterLink to="/reports">Reports</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 2rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

header h2 {
  margin: 0;
  white-space: nowrap;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #333;
  background: #e8e8e8;
}

main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
