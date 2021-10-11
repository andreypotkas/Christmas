
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video-html');
const playButtonBig = videoPlayer.querySelector('.play');
const pause = videoPlayer.querySelector('.pause');
const playButton = videoPlayer.querySelector('.play-small');
const volume = videoPlayer.querySelector('.volume-progress');
const currentTimeElement = videoPlayer.querySelector('.current');
const durationTimeElement = videoPlayer.querySelector('.duration');
const progress1 = videoPlayer.querySelector('.video-progress');
const progressBar = videoPlayer.querySelector('.progress');
const progress = document.querySelector('.progress');
const volumeButton = document.querySelector('.volume');
const volumeButtonClose = document.querySelector('.volumeButtonClose');
const fullScreen = document.querySelector('.fullScreen-btn');
const volumeProgress = document.querySelector('.volume-progress');
const playerPanel = document.querySelector('.player-panel');

document.addEventListener('keypress', function (e) {
  e.preventDefault();
  if((e || window.event).keyCode === 32){
    video.paused ? play() : pauseFunc();
}});
    
document.addEventListener('keypress', function (e) {
  e.preventDefault();
  if(e.keyCode === 77){
    video.volume !=0 ? volumeMute() : volumeOn();
}});

document.addEventListener('keypress', function (e) {
  e.preventDefault();
  if((e || window.event).keyCode === 70){
    video.webkitEnterFullScreen();
}});

document.addEventListener('keypress', function (e) {
  
  e.preventDefault();
  if((e || window.event).keyCode === 190){
    video.playbackRate = 2.0;
}});

function pauseFunc(){
  video.pause();
  playButtonBig.classList.remove('display-hide');
  playButton.classList.remove('display-hide');
  pause.classList.add('display-hide');
  pause.classList.remove('display-show');
}
function play (){
  video.play();
  playButtonBig.classList.add('display-hide');
  playButton.classList.add('display-hide');
  pause.classList.remove('display-hide');
}

//Play and Pause button
playButton.addEventListener('click', (e) => {
  video.play();
  play();
});

video.addEventListener('click', (e) => {
  if(video.paused){
    play();
  } else {
    pauseFunc();
  }
});

playButtonBig.addEventListener('click', (e) => {
  play();
});

pause.addEventListener('click', (e) => {
  pauseFunc();
});
function volumeOn (){
  volumeButton.classList.remove('display-hide');
  volumeButtonClose.classList.add('display-hide');
  video.volume=0.5;
  volumeProgress.value=0.5;
};
function volumeMute(){
  volumeButton.classList.add('display-hide');
  volumeButtonClose.classList.remove('display-hide');
  video.volume=0.0;
  volumeProgress.value=0;
}

volumeButton.addEventListener('click', (e) => {
  volumeMute();
});

volumeButtonClose.addEventListener('click', (e) => {
  volumeOn ();
});


volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value;
})

const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
}

video.addEventListener('timeupdate', currentTime);
//Progress bar
video.addEventListener('timeupdate', () =>{
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  progressBar.value=`${value}`;
  if(progressBar.value==100){
    pauseFunc();
  }
});

//change progress bar on click
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
});

fullScreen.addEventListener('click', (e)=> {
  video.webkitEnterFullScreen();
});




progress.addEventListener('timeupdate',currentTime );  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});
 

volumeProgress.addEventListener('input', function() {
  
  var value1 = video.volume * 100;
  volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value1}%, #C4C4C4 ${value1}%, #C4C4C4 100%)`;
  
 
});

//11111111111111111111111111111111111111111111111111111111111111111111111111


let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 506; // ширина картинки


let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент

  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next1').onclick = function() {
  // сдвиг вправо

  position -= width;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  list.style.marginLeft = position + 'px';
};