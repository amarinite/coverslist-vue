<template>
  <header>
    <img src="../assets/Avatar.jpg" alt="Laura Coubert" class="avatar" />
    <div class="artist-info">
      <h1>Laura Coubert</h1>
      <p>Singer | Composer</p>
    </div>
  </header>
  <div class="separator"></div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  margin: 6rem 0 1rem 0;
}

header img {
  width: 14rem;
  border-radius: 50%;
  border: 2px solid rgb(218, 142, 142);
}

.artist-info {
  margin-left: 3rem;
}

h1 {
  font-size: 42px;
  color: rgb(218, 142, 142);
}

.separator {
  height: 0.3rem;
  width: 8rem;
  background-color: rgb(218, 142, 142);
  margin-bottom: 2rem;
}
</style>
