const dataVideo = `[
    {
        "src": "img/istockphoto-454735770-640_adpp_is.mp4",
        "alt": "video1",       
        "name": "Lorem ipsum dolor sit.",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus."       
    },
    {
        "src": "img/istockphoto-497375943-640_adpp_is.mp4",
        "alt": "video2",
        "name": "Lorem, ipsum dolor.",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi?"
        
    },
    {
        "src": "img/istockphoto-1306392163-640_adpp_is.mp4",
        "alt": "video3",
        "name": "Lorem, ipsum.",
        "info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, harum!"
        
    },
    {
        "src": "img/istockphoto-1347783598-640_adpp_is.mp4",
        "alt": "video4",
        "name": "Lorem ipsum dolor sit.",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere."        
    }
]`

const videoLine = document.querySelector('.video-line');
const elementVideos = JSON.parse(dataVideo);

elementVideos.forEach(element => {
    const videoIcon = document.createElement('div');
    videoIcon.classList.add('video-icon');
    videoLine.appendChild(videoIcon);

    const videoImage = document.createElement('video');
    videoImage.classList.add('video-image');
    videoImage.src = element.src;
    videoIcon.appendChild(videoImage);

    videoImage.addEventListener('click', () => {
        const wrapper = document.querySelector('.wrapper');
        const wrapperVideo = document.querySelector('.video');
        wrapper.style.display = 'block';
        wrapperVideo.src = videoImage.src;
    });

    const videoText = document.createElement('div');
    videoText.classList.add('video-text');
    videoIcon.appendChild(videoText);

    const videoName = document.createElement('h2');
    videoName.classList.add('video-name');
    videoName.textContent = element.name;
    videoText.appendChild(videoName);

    const videoInfo = document.createElement('p');
    videoInfo.classList.add('video-info');
    videoInfo.textContent = element.info;
    videoText.appendChild(videoInfo);
});

const video = document.querySelector('.video');
const playBtn = document.querySelector('.controls-play');
const playBtnImg = document.querySelector('.play-video');
const stopBtn = document.querySelector('.controls-stop');
const rewindLeftBtn = document.querySelector('.controls-rewind-left');
const rewindRightBtn = document.querySelector('.controls-rewind-right');
const progressVideo = document.querySelector('.progress-video');
const volumeVideo = document.querySelector('.volume-video');
const timeVideo = document.querySelector('.controls-time');

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
        playBtnImg.src = './img/pause.png';
    }
    else {
        video.pause();
        playBtnImg.src = './img/play.png';
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtnImg.src = './img/play.png';
}

function rewindLeftVideo() {
    video.currentTime -= 5;
}

function rewindRightVideo() {
    video.currentTime += 5;
}

function timerVideo() {
    progressVideo.value = (video.currentTime / video.duration) * 100;
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    timeVideo.innerHTML = `${minutes}:${seconds}`;
}

function inputProgressVideo() {
    video.currentTime = progressVideo.value / 100 * video.duration;
}

function inputVolumeVideo() {
    video.volume = volumeVideo.value;
}

playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
rewindLeftBtn.addEventListener('click', rewindLeftVideo);
rewindRightBtn.addEventListener('click', rewindRightVideo);
video.addEventListener('timeupdate', timerVideo);
progressVideo.addEventListener('input', inputProgressVideo);
volumeVideo.addEventListener('input', inputVolumeVideo);