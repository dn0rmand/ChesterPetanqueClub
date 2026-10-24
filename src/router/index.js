import { createRouter, createWebHistory } from 'vue-router'
import GalleryView from '../views/GalleryView.vue'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/equipe',
      name: 'people',
      component: PeopleView,
      alias: ['/people'],
    },
    {
      path: '/galerie',
      name: 'gallery',
      component: GalleryView,
      alias: ['/gallery'],
    },
    { path: '/index.html', redirect: '/' },
    { path: '/people.html', redirect: '/equipe' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
