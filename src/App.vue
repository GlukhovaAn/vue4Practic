<template>
  <div class="header">
    <h1 class="headerText">Recipes</h1>
    <div class="links">
      <router-link to="/">All recipes</router-link>
      <router-link to="/favourite">Favorite</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style>
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}
h1 {
  font-weight: 400;
  font-size: 48px;
  margin-left: 50px;
}
p {
  font-weight: 700;
  font-size: 16px;
}
sup {
  font-weight: 400;
  font-size: 12px;
}
a{
  text-decoration: none;
  color: #000000;
  width: 148px;
  height: 47px;
  border-radius: 25px;
  background-color: #FF4F04;
  display: flex;
  align-items: center;
  justify-content: center;
}
label{
  font-weight: 700;
  font-size: 16px;
  color: #414141;
}
a:hover{
  transition: 0.15s;
  transform: scale(1.05);
  color: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 158px;
  background-color: #FFA032;
}
.headerText{
  width: 20vw;
  height: 100px;
  background-color: #FF4F04;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links {
  width: 22vw;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
}
</style>
