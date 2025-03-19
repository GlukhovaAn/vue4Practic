import { createRouter, createWebHistory } from 'vue-router'
import AllRecipesView from '../views/AllRecipesView.vue'
import FavouriteRecipesView from '../views/FavouriteRecipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AllRecipesView
    },
    {
      path: '/favourite',
      component: FavouriteRecipesView
    },
  ]
})

export default router
