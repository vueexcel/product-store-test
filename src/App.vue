<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<style>
/* #app {
  @apply antialiased flex flex-col items-center mt-4;
} */
</style>
