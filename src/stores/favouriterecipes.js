import { defineStore } from "pinia";

export const useFavouriteRecipesStore = defineStore("favouriterecipes", {
  state: () => ({
    favouriteRecipes: [],
  }),
  actions: {
    addRecipe(recipe) {
      if (!this.favouriteRecipes.some((el) => el.id === recipe.id)) {
        recipe.isWatched = false
        this.favouriteRecipes.push(recipe);
        console.log(this.favouriteRecipes);
      }
    },
    deleteRecipe(id) {
      this.favouriteRecipes = this.favouriteRecipes.filter(
        (el) => el.id !== id
      );
    },
  },
});
