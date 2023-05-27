<template>
  <div class="song-list">
    <SongCard
      class="song-item all"
      v-for="song in songs"
      :key="song.id"
      :song="song"
    />
  </div>
</template>

<script setup>
import s from "../data/songs.json";
import { ref } from "vue";
import SongCard from "./SongCard.vue";

const songs = ref(s);
</script>

<style scoped>
.song-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
}

.filtered {
  display: none;
}

/********************
*** MEDIA QUERIES ***
********************/

@media (max-width: 1255px) {
  .song-list {
    grid-template-columns: min-content min-content min-content;
  }
}

@media (max-width: 1100px) {
  .song-list {
    grid-template-columns: min-content min-content;
  }
}

@media (max-width: 720px) {
  .song-list {
    grid-template-columns: min-content;
  }
}
</style>
