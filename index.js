console.log("welcome");
let song = [
    { songName: "Achyutam Keshavam.mp3", filePath: "resource/songs/Achyutam Keshavam.mp3", coverPath: "resource/covers/1.jpg" },
    { songName: "Koi Jaye Jo Vrindavann.mp3", filePath: "resource/songs/Koi Jaye Jo Vrindavann.mp3", coverPath: "resource/covers/2.jpg" },
    { songName: "Kyaa Baat Haii 2.0.mp3", filePath: "resource/songs/Kyaa Baat Haii 2.0.mp3", coverPath: "resource/covers/3.jpg" },
    { songName: "O Bedardeya.mp3", filePath: "resource/songs/O Bedardeya.mp3", coverPath: "resource/covers/4.jpg" },
    { songName: "Shree Hari Stotram.mp3", filePath: "resource/songs/Shree Hari Stotram.mp3", coverPath: "resource/covers/5.jpg" },
    { songName: "Tere Pyaar Mein.mp3", filePath: "resource/songs/Tere Pyaar Mein.mp3", coverPath: "resource/covers/6.jpg" },
    { songName: "Tulsi Vivah Mangalashtak.mp3", filePath: "resource/songs/Tulsi Vivah Mangalashtak.mp3", coverPath: "resource/covers/7.jpg" },
    { songName: "Yeh Mera Dil Mahiya (1).mp3", filePath: "resource/songs/Yeh Mera Dil Mahiya.mp3", coverPath: "resource/covers/8.jpg" },
    { songName: "Zihaal e Miskin.mp3", filePath: "resource/songs/Zihaal e Miskin.mp3", coverPath: "resource/covers/9.jpg" },
    { songName: "Mohabbat Ho Gayi Thi Dono Ko Ek Arsa Ho Gaya.mp3", filePath: "resource/songs/Mohabbat Ho Gayi Thi Dono Ko Ek Arsa Ho Gaya.mp3", coverPath: "resource/covers/10.jpg" },
]
//console.log(song[0].filePath)
let songIndex = 0;
let myAudio = new Audio(song[songIndex].filePath);
let masterPlay = document.getElementById("masterPlay");
masterPlay.addEventListener("click", function () {
    if (myAudio.paused || myAudio.currentTime <= 0) {
        myAudio.play();
        songList[songIndex].style.backgroundColor = "green";
        let child=songList[songIndex].children[1];
        child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        let sinfo = document.getElementById("gif");
        sinfo.style.opacity = 1;

       // console.log("play");



    } else {
        myAudio.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        let sinfo = document.getElementById("gif");
        sinfo.style.opacity = 0;
    }
})

//auto-increment song after ending
setInterval(function(){
    if(Math.floor(myAudio.currentTime)==Math.floor(myAudio.duration))
    {
        songList[songIndex].style.backgroundColor = "white";
        songIndex=(songIndex+1)%song.length;
        myAudio.src=song[songIndex].filePath;
        myAudio.play();
        songList[songIndex].style.backgroundColor = "green";
        let child=songList[songIndex].children[1];
        child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
    }
   
},1000)
//to update to progress bar
let progressBar = document.getElementById('myProgressBar');
myAudio.addEventListener("timeupdate", function () {
    let myProgress = (myAudio.currentTime / myAudio.duration) * 100;
    progressBar.value = myProgress;
    //console.log(progressBar.value);
})
// forward the song
progressBar.addEventListener("change", function () {
    myAudio.currentTime = (progressBar.value * myAudio.duration) / 100;
})


let collections = document.getElementsByClassName("songItem")
let songList = Array.from(collections);

// console.log(songList[0]);
let prevSong = document.getElementById("prevSong");
let nextSong = document.getElementById("nextSong");

prevSong.addEventListener("click", function () {
    //myAudio.pause();
    songList[songIndex].style.backgroundColor = "white";
    if(!songIndex>0){
        songIndex=song.length;
    }
    songIndex=(songIndex-1)%song.length;
    console.log(songIndex);
    myAudio.src=song[songIndex].filePath;
    myAudio.play();
    songList[songIndex].style.backgroundColor = "green";
    let child=songList[songIndex].children[1];
    child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
    // if (songIndex > 0) {
    //     songIndex--;
    //     //myAudio = new Audio(song[songIndex].filePath)
    //     myAudio.src=song[songIndex].filePath;
    //     myAudio.play();
    //     songList[songIndex + 1].style.backgroundColor = "white";
    //     songList[songIndex].style.backgroundColor = "green";
    //     let child=songList[songIndex].children[1];
    //     child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
    // } else {
    //     songIndex = songList.length - 1;
    //     // myAudio = new Audio(song[songIndex].filePath)
    //     myAudio.src=song[songIndex].filePath;
    //     myAudio.play();
    //     songList[0].style.backgroundColor = "white";
    //     songList[songList.length-1].style.backgroundColor = "green";
    //     let child=songList[songIndex].children[1];
    //     child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
    // }

    //console.log(songIndex);
})
nextSong.addEventListener("click", function () {
    //myAudio.pause();
    songList[songIndex].style.backgroundColor = "white";
    songIndex=(songIndex+1)%song.length;
    myAudio.src=song[songIndex].filePath;
    myAudio.play();
    songList[songIndex].style.backgroundColor = "green";
    let child=songList[songIndex].children[1];
    child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;

    // if (songIndex < songList.length - 1) {
    //     songIndex++;
    
    //     //myAudio = new Audio(song[songIndex].filePath)
    //     myAudio.src=song[songIndex].filePath;
    //     myAudio.play();
       
    //     songList[songIndex - 1].style.backgroundColor = "white";
    //     songList[songIndex].style.backgroundColor = "green";
    //     let child=songList[songIndex].children[1];
    //     child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
       
        

    // } else {
    //     songIndex = 0;
    //     //myAudio = new Audio(song[songIndex].filePath)
    //     myAudio.src=song[songIndex].filePath;
    //     myAudio.play();
    //     songList[songList.length-1].style.backgroundColor = "white";
    //     songList[0].style.backgroundColor = "green";
    //     let child=songList[songIndex].children[1];
    //     child.innerHTML=`${song[songIndex].songName.slice(0,10)}`;
        
    // }
   

    //console.log(songIndex);
    
})
setInterval(function(){
        let time=Math.floor(myAudio.currentTime);
        let min=Math.floor(time/60);
        let sec=time%60;
        let child2=songList[songIndex].children[3];
        child2.innerHTML=` ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
},1000);

