<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>
    <h1>Contract Detail</h1>
    <p>Viewing contract {{ id }}</p>
  </div>
</template>
