const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timeStamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');

function videoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10)  {
        minutes = '0' + minutes;
    }

    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10)  {
        seconds = '0' + seconds;
    }

    timeStamp.innerHTML = `${minutes}:${seconds}`;
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', videoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', videoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);