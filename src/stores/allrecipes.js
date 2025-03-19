import { defineStore } from 'pinia'
import axios from 'axios'

export const useAllRecipesStore = defineStore('allrecipes', {
    state: () => ({
      allRecipes: [],
    }),
    actions: {
      async getAllRecipes(){
        let res = await axios.get('https://dummyjson.com/recipes')
        this.allRecipes = res.data.recipes
      },
      async searchByName(searchRes){
        let res = await axios.get(`https://dummyjson.com/recipes/search?q=${searchRes}`)
        this.allRecipes = res.data.recipes
      }
    }
})
