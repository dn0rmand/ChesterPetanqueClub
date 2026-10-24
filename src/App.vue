<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BrandHeader from './components/BrandHeader.vue'
import SiteNav from './components/SiteNav.vue'

/** 0 at top → 1 once scrolled; only fades the compact sticky brand in. */
const shrink = ref(0)
const SHRINK_RANGE = 160

function syncShrink() {
  shrink.value = Math.min(1, Math.max(0, window.scrollY / SHRINK_RANGE))
}

onMounted(() => {
  syncShrink()
  window.addEventListener('scroll', syncShrink, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', syncShrink)
})
</script>

<template>
  <header
    class="site-header"
    :style="{ '--shrink': shrink }"
  >
    <div class="site-header-inner">
      <SiteNav />
      <div class="brand-compact" aria-hidden="true">
        <p class="brand-compact-title">Le Chester Pétanque Club</p>
        <BrandHeader compact />
      </div>
    </div>
  </header>

  <div class="brand-hero">
    <BrandHeader />
  </div>

  <RouterView />
</template>
