let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
   {
    name: "It's Always Sunny With You",
    artist: "{Parentheses}",
    image: "https://i.scdn.co/image/ab67616d0000b273afaf6006172a71414bfa4ee7",
    path: "/Users/mariahusain/Desktop/Gift/Sunny.mp3"
  },
  {
    name: "She's A Rainbow",
    artist: "The Rolling Stones",
    image: "https://www.udiscovermusic.com/wp-content/uploads/2019/08/Shes-A-Rainbow-Rolling-Stones.jpg",
    path: "/Users/mariahusain/Desktop/Gift/She's a rainbow.mp3"
  },
  {
    name: "You Send Me",
    artist: "Sam Cooke",
    image: "https://m.media-amazon.com/images/I/51SbjThDbOL.jpg",
    path: "/Users/sameer/Desktop/Gift/you send me.mp3"
  },
  {
    name: "Something",
    artist: "The Beatles",
    image: "https://www.moma.org/media/W1siZiIsIjMxOTg3MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=deee3aca94ac8af0",
    path: "/Users/sameer/Desktop/Gift/Something.mp3"
  },
  {
    name: "Judy You Hung the Moon",
    artist: "Harbour",
    image: "https://m.media-amazon.com/images/I/81y6g7sw3BL._SS500_.jpg",
    path: "/Users/sameer/Desktop/Gift/Judy you hung the moon.mp3"
  },
  {
    name: "A Teenager In Love",
    artist: "Dion & The Belmonts",
    image: "https://i.scdn.co/image/ab67616d0000b273605566683bef0b421bf8bf52",
    path: "/Users/sameer/Desktop/Gift/A Teenager In Love.mp3"
  },

  {
    name: "Darlin'",
    artist: "Beach Boys",
    image: "https://i.scdn.co/image/ab67616d0000b273a4c1e55432782aad4cfd09fd",
    path: "/Users/sameer/Desktop/Gift/Darlin.mp3"
  },
  {
    name: "Sweet Talk",
    artist: "Saint Motel",
    image: "https://i.scdn.co/image/ab67616d0000b27325dd1a3969c0912291b6fc7b",
    path: "/Users/sameer/Desktop/Gift/Sweet talk.mp3"
  },
  {
    name: "Somethin' Stupid",
    artist: "Frank Sinatra and Nancy Sinatra",
    image: "https://i.scdn.co/image/ab67616d0000b2733e2331ff09f59ea3c87fe5d6",
    path: "/Users/sameer/Desktop/Gift/Somethin stupid.mp3"
  },
  {
    name: "I Want To Hold Your Hand",
    artist: "The Beatles",
    image: "https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf",
    path: "/Users/sameer/Desktop/Gift/I Want To Hold Your Hand.mp3"
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

