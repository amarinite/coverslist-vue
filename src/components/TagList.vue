<template>
  <div class="tag-list">
    <button v-for="tag in tagList" :key="index" class="tag">{{ tag }}</button>
  </div>
</template>

<script setup>
const tagList = ["all", "anime", "cartoons", "mxtx", "videogames"];
</script>

<style scoped>
.tag-list {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.tag {
  transition: all 0.2s ease;
  background-color: rgb(252, 241, 241);
  border: 2px solid rgb(218, 142, 142);
  border-radius: 25px;
  font-size: 16px;
  padding: 0.5rem 1rem;
}

.tag:hover,
.active-tag {
  background-color: rgb(218, 142, 142);
  color: #fff;
}

/********************
*** MEDIA QUERIES ***
********************/

@media (max-width: 530px) {
  .tag-list {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
