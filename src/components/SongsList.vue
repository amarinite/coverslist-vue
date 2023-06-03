<template>
  <TagList @selectTag="onTagSelected" />
  <div class="song-list">
    <SongCard
      class="song-item"
      v-for="song in filteredSongs"
      :key="song.id"
      :song="song"
    />
  </div>
</template>

<script setup>
import s from "../data/songs.json";
import { ref } from "vue";
import TagList from "../components/TagList.vue";
import SongCard from "./SongCard.vue";

const songs = ref(s);
const filteredSongs = ref(songs.value);

const filterSongs = (tag) => {
  if (tag === "all") {
    return songs.value;
  } else {
    return songs.value.filter((song) => {
      return song.category === tag;
    });
  }
};

const onTagSelected = (tag) => {
  filteredSongs.value = filterSongs(tag);
};
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
