import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    searchQuery: '',
    loading: false,
    error: null
  }),
  
  getters: {
    filteredRecipes: (state) => {
      return state.recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    }
  },
  
  actions: {
    async fetchRecipes(search = '') {
      this.loading = true
      this.error = null
      
      try {
        const response = await axios.get(`https://dummyjson.com/recipes?search=${search}`)
        this.recipes = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    setSearchQuery(query) {
      this.searchQuery = query
    }
  }
})