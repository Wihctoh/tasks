// Необходимо по нажатию на кнопку включать музыку
const audio = document.querySelector("audio");
const artist = document.querySelector(".artist");
const songName = document.querySelector(".songName");
const songCover = document.querySelector(".songCover");

const songs = [
  {
    id: 1,
    path: "./music/rington_1.mp3",
    artist: "Leston",
    songName: "better end",
    imgPath: "background-image: url(./assets/img1.jpg)",
  },
  {
    id: 2,
    path: "./music/rington_2.mp3",
    artist: "Chershil",
    songName: "hello word",
    imgPath: "background-image: url(./assets/img2.jpg)",
  },
  {
    id: 3,
    path: "./music/rington_3.mp3",
    artist: "Winston",
    songName: "finish him",
    imgPath: "background-image: url(./assets/img3.jpg)",
  },
];

let flag = false;
let currentIndexSong = 0;

document.querySelector(".play").addEventListener("click", function () {
  audio.src = songs[currentIndexSong].path;
  artist.innerHTML = songs[currentIndexSong].artist;
  songName.innerHTML = songs[currentIndexSong].songName;
  songCover.style = songs[currentIndexSong].imgPath;

  if (!flag) {
    audio.play();
    this.style = "background-image: url(./assets/pauseBtn.svg);";

    flag = true;
  } else {
    flag = false;
    audio.pause();
    this.style = "background-image: url(./assets/playBtn.svg);";
  }
});

document.querySelector(".prev").addEventListener("click", function () {
  if (currentIndexSong === 0) return;
  currentIndexSong--;
  artist.innerHTML = songs[currentIndexSong].artist;
  songName.innerHTML = songs[currentIndexSong].songName;
  songCover.style = songs[currentIndexSong].imgPath;
  audio.src = songs[currentIndexSong].path;
  audio.play();
  document.querySelector(".play").style =
    "background-image: url(./assets/pauseBtn.svg);";
  flag = true;
});

document.querySelector(".next").addEventListener("click", function () {
  if (currentIndexSong === songs.length - 1) return;

  currentIndexSong++;
  artist.innerHTML = songs[currentIndexSong].artist;
  songName.innerHTML = songs[currentIndexSong].songName;
  songCover.style = songs[currentIndexSong].imgPath;
  audio.src = songs[currentIndexSong].path;
  audio.play();
  document.querySelector(".play").style =
    "background-image: url(./assets/pauseBtn.svg);";
  flag = true;
});
