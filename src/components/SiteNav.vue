<script setup>
const showNav = import.meta.env.DEV
</script>

<template>
  <nav v-if="showNav" class="site-nav" aria-label="Menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/equipe">Equipe dirigeante</RouterLink>
    <RouterLink to="/galerie">Galerie</RouterLink>
  </nav>
</template>
