<script setup>
import UserHeader from "./components/UserHeader.vue";
import TagList from "./components/TagList.vue";
import SongsList from "./components/SongsList.vue";
</script>

<template>
  <div class="container">
    <UserHeader />
    <TagList />
    <SongsList />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(241, 234, 234);
  color: rgb(44, 36, 36);
}

.container {
  font-family: "Roboto", sans-serif;

  max-width: 100rem;
  margin: 0 2rem;
  padding-bottom: 10rem;
}
</style>
