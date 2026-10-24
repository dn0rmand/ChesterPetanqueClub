<script setup>
import logoUrl from '../assets/logo.jpg'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="compact ? 'brand-header brand-header-compact' : 'brand-header'">
    <h1 v-if="!compact">Le Chester Pétanque Club</h1>
    <img
      class="logo"
      :src="logoUrl"
      :alt="compact ? '' : 'Chester Pétanque Club'"
      :aria-hidden="compact ? 'true' : undefined"
      width="1140"
      height="1140"
    >
  </div>
</template>
