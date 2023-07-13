let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"KORDHELL - KILLERS FROM THE NORTHSIDE",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tom Wilson - Run For Your Life (ft. M.I.M.E) [NCS Release]",filePath:"songs/2.mp3",coverPath:"cover/2"},
    {songName:"Isolate.exe Crystals",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Neoni x Easy Mccoy - MAYHEM",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Freddie Dredd - Limbo ",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"INTERWORLD - METAMORPHOSIS",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Kordhell - Live Another Day",filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"KORDHELL - SCOPIN (Phonk)",filePath:"songs/8.mp3",coverPath:"cover/8.jpg"}
]
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let audioElement=new Audio('songs/1.mp3');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


// songItems.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

//audioElement.play();
//handle pause/play click
masterPlay.addEventListener('click',()=>{
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
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex=8;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})