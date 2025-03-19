<template>
  <div class="allrec">
    <h1>All recepis</h1>
    <div class="search">
      <label>Search recipes</label>
      <input
        type="text"
        placeholder="Margherita"
        v-model="inputVal"
        @keydown.enter="allRecipesStore.searchByName(inputVal)"
      />
    </div>
    <div class="recipes">
      <div
        v-for="(item, index) in allRecipesStore.allRecipes"
        :key="index"
        class="recipe"
      >
        <img :src="item.image" alt="recImg" />
        <div class="text">
          <p>{{ item.name }}</p>
          <sup>Difficulty: {{ item.difficulty }}</sup>
          <sup>Cuisine: {{ item.cuisine }}</sup>
        </div>
        <button @click="favouriteRecipesStore.addRecipe(item)">
          Add to favourite
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useAllRecipesStore } from "@/stores/allrecipes";
import { useFavouriteRecipesStore } from "@/stores/favouriterecipes";

const allRecipesStore = useAllRecipesStore();
const favouriteRecipesStore = useFavouriteRecipesStore();
const inputVal = ref("");

onMounted(() => {
  allRecipesStore.getAllRecipes();
});
</script>
<style scoped>
.allrec {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
}
input {
  height: 46px;
  width: 30vw;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  padding-left: 20px;
  outline: none;
}
::placeholder {
  color: black;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(1, 450px);
  gap: 30px;
  justify-items: center;
}
.recipe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
img {
  height: auto;
  width: 300px;
  border-radius: 25px 25px 0px 0px;
}
p{
  margin: 0;
}
.text {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
button {
  align-self: center;
  width: 60%;
  height: 47px;
  border: none;
  border-radius: 25px;
  background: rgb(255, 79, 4);
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
button:hover{
  transition: 0.15s;
  transform: scale(1.05);
  color: white;
}
</style>
