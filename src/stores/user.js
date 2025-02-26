import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    favorites: [],
    watched: []
  }),
  
  getters: {
    isFavorite: (state) => (recipeId) => {
      return state.favorites.includes(recipeId)
    },
    
    isWatched: (state) => (recipeId) => {
      return state.watched.includes(recipeId)
    }
  },
  
  actions: {
    addFavorite(recipeId) {
      if (!this.isFavorite(recipeId)) {
        this.favorites.push(recipeId)
      }
    },
    
    removeFavorite(recipeId) {
      this.favorites = this.favorites.filter(id => id !== recipeId)
    },
    
    addWatched(recipeId) {
      if (!this.isWatched(recipeId)) {
        this.watched.push(recipeId)
      }
    },
    
    removeWatched(recipeId) {
      this.watched = this.watched.filter(id => id !== recipeId)
    }
  }
})