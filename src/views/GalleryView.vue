<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const modules = import.meta.glob('../assets/pictures/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default',
})

const pictures = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => ({
    id: path,
    src,
    alt: `Photo du club ${index + 1}`,
  }))

const activeIndex = ref(null)
const activePicture = computed(() =>
  activeIndex.value === null ? null : pictures[activeIndex.value],
)

function openPicture(index) {
  activeIndex.value = index
}

function closePicture() {
  activeIndex.value = null
}

function showPrevious() {
  if (activeIndex.value === null || pictures.length === 0) return
  activeIndex.value = (activeIndex.value - 1 + pictures.length) % pictures.length
}

function showNext() {
  if (activeIndex.value === null || pictures.length === 0) return
  activeIndex.value = (activeIndex.value + 1) % pictures.length
}

function onKeydown(event) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') closePicture()
  if (event.key === 'ArrowLeft') showPrevious()
  if (event.key === 'ArrowRight') showNext()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <main>
    <header>
      <div class="intro">
        <p>
          <strong>Galerie</strong> — moments autour du terrain du Chester Pétanque Club.
        </p>
      </div>
    </header>

    <section class="gallery" aria-label="Galerie photos">
      <button
        v-for="(picture, index) in pictures"
        :key="picture.id"
        type="button"
        class="gallery-item"
        @click="openPicture(index)"
      >
        <img :src="picture.src" :alt="picture.alt" loading="lazy">
      </button>
    </section>

    <div
      v-if="activePicture"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Aperçu photo"
      @click.self="closePicture"
    >
      <button type="button" class="lightbox-close" aria-label="Fermer" @click="closePicture">
        ×
      </button>
      <button
        type="button"
        class="lightbox-nav lightbox-prev"
        aria-label="Photo précédente"
        @click="showPrevious"
      >
        ‹
      </button>
      <img :src="activePicture.src" :alt="activePicture.alt">
      <button
        type="button"
        class="lightbox-nav lightbox-next"
        aria-label="Photo suivante"
        @click="showNext"
      >
        ›
      </button>
    </div>
  </main>
</template>
