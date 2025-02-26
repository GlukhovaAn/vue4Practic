import { createRouter, createWebHistory } from 'vue-router'
import AllRecipes from '@/views/AllRecipes.vue'
import FavoriteRecipes from '@/views/FavoriteRecipes.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'AllRecipes',
      component: AllRecipes
    },
    {
      path: '/favorites',
      name: 'FavoriteRecipes',
      component: FavoriteRecipes
    }
  ]
})

export default router