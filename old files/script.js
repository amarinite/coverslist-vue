const songs = document.querySelectorAll(".song-item");
const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    songs.forEach((song) => song.classList.add("filtered"));

    const tagToFilter = tag.innerText;

    const songsArray = [...songs];
    let selectedSongs = songsArray.filter((song) =>
      song.classList.contains(tagToFilter)
    );
    selectedSongs.forEach((song) => {
      song.classList.remove("filtered");
    });
  });
});
