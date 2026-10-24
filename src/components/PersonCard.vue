<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  multi: {
    type: Boolean,
    default: false,
  },
  foodTag: {
    type: String,
    default: '',
  },
  president: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article :class="['person', president ? 'person-president' : 'person-card', { multi }]">
    <p class="name">{{ name }}</p>
    <p class="role">{{ role }}</p>
    <span v-if="foodTag" class="food-tag">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v8M4 3v4c0 2 1 4 3 4s3-2 3-4V3M7 11v10M16 3v18M16 3c3 2 4 6 0 10"></path>
      </svg>
      {{ foodTag }}
    </span>
  </article>
</template>
