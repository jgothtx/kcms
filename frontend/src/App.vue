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
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
}

header h2 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #333;
  background: #e8e8e8;
}

main {
  padding: 2rem;
}
</style>
