<script setup>
import { usePostStore } from "./store/postStore";
import PostItem from "./components/PostItem.vue";
import PostInput from "./components/PostInput.vue";

const postStore = usePostStore();
</script>

<template>
  <div class="app-container">
    <PostInput @addPost="postStore.addPost" />

    <PostItem
      v-for="post in postStore.posts"
      :key="post.id"
      :post="post"
      :onDeletePost="postStore.deletePost"
      :onAddComment="postStore.addComment"
      :onDeleteComment="postStore.deleteComment"
    />
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dff3ff;
  min-height: 100vh;
  padding: 20px;
}
</style>
