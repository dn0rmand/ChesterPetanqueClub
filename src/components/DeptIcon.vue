<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="dept-icon" aria-hidden="true">
    <svg v-if="name === 'secretariat'" viewBox="0 0 24 24">
      <path d="M6 3h9l3 3v15H6z"></path>
      <path d="M15 3v4h4M9 11h6M9 15h6"></path>
    </svg>
    <svg v-else-if="name === 'tresorerie'" viewBox="0 0 24 24">
      <path d="M4 8h16v11H4zM7 8V5h10v3"></path>
      <path d="M8 13h8M8 16h5"></path>
    </svg>
    <svg v-else-if="name === 'marketing'" viewBox="0 0 24 24">
      <path d="M4 14V7l12-3v13L4 14z"></path>
      <path d="M7 14l1 6h4l-1-5M18 8c2 1 2 4 0 5"></path>
    </svg>
    <svg v-else-if="name === 'informatique'" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="13" rx="2"></rect>
      <path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2M14 7l-4 8"></path>
    </svg>
    <svg v-else-if="name === 'logistique'" viewBox="0 0 24 24">
      <path d="M3 7h12v10H3zM15 11h4l2 3v3h-6z"></path>
      <circle cx="7" cy="18" r="2"></circle>
      <circle cx="18" cy="18" r="2"></circle>
    </svg>
  </span>
</template>
