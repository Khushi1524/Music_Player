const playlist = [
  {
    title: "song1",
    artist: "artist1",
    img: "images/img1.jpg",
    song: "audios/birds39-forest-20772.mp3",
  },

  {
    title: "song2",
    artist: "artist2",
    img: "images/img2.jpg",
    song: "audios/theta-binaural-beats-healing-music-increase-brain-power-deep-music-161769.mp3",
  },

  {
    title: "song3",
    artist: "artist3",
    img: "images/img3.jpg",
    song: "audios/zen-spiritual-yoga-massage-meditation-spa-relax-ambient-music-18403.mp3",
  },
];

let title = document.getElementById("title");
let artist = document.getElementById("artist");
let audio = document.getElementById("audio");
let playerimg = document.getElementById("playerimg");
let playbtn = document.getElementById("play");
let pausebtn = document.getElementById("pause");

let musicnum = 0;

function selectmusic(music) {
  title.innerHTML = music.title;
  playerimg.src = music.img;
  artist.innerHTML = music.artist;
  audio.src = music.song;

  pausebtn.style.display = "none";
  playbtn.style.display = "inline-block";
}

selectmusic(playlist[musicnum]);

function playmusic() {
  audio.play();

  pausebtn.style.display = "inline-block";
  playbtn.style.display = "none";
}

function nextmusic() {
  if (musicnum < playlist.length - 1) {
    musicnum++;
  }

  selectmusic(playlist[musicnum]);
}

function previousmusic() {
  if (musicnum != 0) {
    musicnum--;
  }
  selectmusic(playlist[musicnum]);
}

function pausemusic() {
  audio.pause();

  pausebtn.style.display = "none";
  playbtn.style.display = "inline-block";
}

audio.addEventListener("timeupdate", (event) => {
  //console.log(event);
  const { currentTime, duration } = event.srcElement;
  //console.log(currentTime);
  //console.log(duration);

  let progress_time = (currentTime / duration) * 100;
  // console.log(progress_time);

  let progress = document.getElementById("progress");
  progress.style.width = `${progress_time}%`;

  //duration

  let minTime = Math.floor(duration / 60);
  let secTime = Math.floor(duration % 60);

  let timenow = document.getElementById("endtime");
  if (duration) {
    timenow.textContent = `${minTime}:${secTime}`;
  }

  //currenttime

  let minTimeCurrent = Math.floor(currentTime / 60);
  let secTimeCurrent = Math.floor(currentTime % 60);

  let timenowCurrent = document.getElementById("starttime");

  if (secTimeCurrent < 10) {
      secTimeCurrent = `0${secTimeCurrent}`
  }
    timenowCurrent.textContent = `${minTimeCurrent}:${secTimeCurrent}`;
  
});

audio.addEventListener('ended',(event)=>{
    nextmusic();
});



