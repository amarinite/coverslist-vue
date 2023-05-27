<template>
  <div class="song-item">
    <img :src="song.image" />
    <div class="song-info">
      <p class="title">{{ song.title }}</p>
      <p class="uploaded">{{ song.uploaded }}</p>
      <p class="credits" v-for="credit in song.credits">
        {{ credit }}
      </p>
      <a v-if="song.links.youtube" :href="song.links.youtube"
        ><i class="fa-brands fa-youtube"></i
      ></a>
      <a v-if="song.links.soundcloud" :href="song.links.soundcloud"
        ><i class="fa-brands fa-soundcloud"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["song"]);
</script>

<style scoped>
.song-item {
  transition: all 0.1s ease-out;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(252, 241, 241);
  box-shadow: 3px 3px 8px rgb(224, 210, 210);
}

.song-item:hover {
  transition: all 0.1s ease-out;
  transform: scale(1.03);
  box-shadow: 3px 3px 30px rgb(224, 210, 210);
}

.song-item img {
  width: 20rem;
  border-radius: 10px;
}

/********************
*** SONG INFO ***
********************/

.song-info {
  margin: 0 1rem;
}

.title {
  font-size: 18px;
  color: rgb(44, 36, 36);
  border-bottom: 1px solid rgb(218, 142, 142);
  margin-bottom: 0.5rem;
}

.uploaded {
  font-size: 14px;
  color: rgb(72, 80, 85);
  margin-bottom: 0.8rem;
}

.credits {
  font-size: 14px;
}

/********************
*** SOCIAL ICONS ***
********************/

.song-info i {
  font-size: 20px;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
}

.fa-soundcloud {
  color: rgb(238, 141, 14);
}

.fa-youtube {
  color: rgb(221, 9, 9);
}

/********************
*** MEDIA QUERIES ***
********************/

@media (max-width: 1430px) {
  .title {
    font-size: 16px;
  }

  .uploaded {
    font-size: 12px;
  }

  .credits {
    font-size: 12px;
  }

  .song-item img {
    width: 18rem;
  }
}

@media (max-width: 1255px) {
  .song-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .song-item img {
    width: 20rem;
  }
  .title {
    font-size: 17px;
  }

  .uploaded {
    font-size: 14px;
  }

  .credits {
    font-size: 14px;
  }

  .song-item img {
    width: 21rem;
  }

  .song-info {
    margin: 10px 15px;
    text-align: left;
  }
}

@media (max-width: 1100px) {
  .song-info i {
    font-size: 28px;
  }
}

@media (max-width: 530px) {
  .song-item img {
    width: 20rem;
  }
}
</style>
