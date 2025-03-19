<template>
  <div class="favrec">
    <h1>Favourite ({{ favouriteRecipesStore.favouriteRecipes.length }})</h1>
    <div class="filter">
      <label>Difficulty</label>
      <select v-model="selectDiff">
        <option value="All" selected>All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
      </select>
    </div>
    <div class="recipes">
      <div v-for="(item, index) in filteredRecipes" :key="index" class="recipe">
        <img :src="item.image" alt="recImg" />
        <div class="info">
          <div class="text">
            <p>{{ item.name }}</p>
            <sup>Difficulty: {{ item.difficulty }}</sup>
            <sup>Cuisine: {{ item.cuisine }}</sup>
          </div>
          <div class="buttons">
            <button
              @click="item.isWatched = !item.isWatched"
              :class="item.isWatched ? 'green' : 'blue'"
            >
              {{ item.isWatched ? "Watched" : "Unwatched" }}
            </button>
            <button @click="favouriteRecipesStore.deleteRecipe(item.id)">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useFavouriteRecipesStore } from "@/stores/favouriterecipes";
import { ref, watch, computed } from "vue";

const favouriteRecipesStore = useFavouriteRecipesStore();
const selectDiff = ref("All");

const filteredRecipes = computed(() => {
  if (selectDiff.value === "All") {
    return favouriteRecipesStore.favouriteRecipes;
  } else {
    return favouriteRecipesStore.favouriteRecipes.filter(
      (recipe) => recipe.difficulty === selectDiff.value
    );
  }
});

watch(selectDiff, () => {});
</script>
<style scoped>
.favrec {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filter {
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
}
select {
  height: 46px;
  width: 130px;
  padding-left: 15px;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 15px;
  background: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  background-repeat: no-repeat;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, rgb(0, 0, 0) 50%),
    linear-gradient(135deg, rgb(0, 0, 0) 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(1, 470px);
  justify-items: center;
  gap: 20px;
}
img {
  width: 253px;
  height: 285px;
  border-radius: 25px 0px 0px 25px;
}
button {
  font-size: 16px;
  font-weight: 700;
  height: 47px;
  width: 135px;
  border: none;
  border-radius: 25px;
  background: rgb(255, 4, 4);
  margin: 0 0 20px 0;
  cursor: pointer;
}
.recipe {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 285px;
  margin: 0 30px 0 30px;
}
.text {
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.green {
  background-color: #6fff8f;
  font-size: 16px;
  font-weight: 700;
  width: 135px;
  height: 47px;
  border: none;
  border-radius: 25px;
}
.blue {
  background-color: #85d3ff;
  font-size: 16px;
  font-weight: 700;
  height: 47px;
  width: 135px;
  border: none;
  border-radius: 25px;
}
</style>
