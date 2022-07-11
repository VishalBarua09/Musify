console.log("Welcome to Musify");

// Initialize the Variables
let songIndex  = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kalli Ho Gayi: Jass Manak", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Age 19: Jass Manak", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bandook: Jass Manak", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Boss: Jass Manak", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "chehra Tera: Jass Manak", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bapu Zimidar: Jassi Gill", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Father Saab", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jannat Ve: Darshan Raval", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Burj Khalifa: Akshay & Kiara", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Partner - You're My Love: Govinda & Salman", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play Pause Circle}
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   
    myProgressBar.value = progress;
})



myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    myProgressBar.value =  audioElement.currentTime; 
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })    
} 


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


