


var audioa=[{
    name:"Nach Meri Rani",
    singer:"Guru Randhawa",
    src:"C:\Users\hp\Desktop\Base\FRONTEND_CHALLENGES\NAVBAR25-CUSTOMAUDIOPLAYER\audiofiles\Naach Meri Rani - Guru Randhawa.mp3"
},{
    name:"G.O.A.T.",
    singer:"Diljit Doshanj",
    src:"C:\Users\hp\Desktop\Base\FRONTEND_CHALLENGES\NAVBAR25-CUSTOMAUDIOPLAYER\audiofiles\G.O.A.T - Diljit Dosanjh (DjPunjab.Com).mp3"
}]
// var audioa=[]
// var audio=new Audio("audiofiles/G.O.A.T - Diljit Dosanjh (DjPunjab.Com).mp3")


// audioa.push(audio)
// var audio2=new Audio("audiofiles/Naach Meri Rani - Guru Randhawa.mp3")
// audioa.push(audio2)


document.querySelector(".volume-slider").style.width="75%";
var i=0;

function next(){
    console.log(this.indexAudio)
    document.getElementById("source-audio").src=audioa[i].src
    if (this.indexAudio <audioa.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        // updateStylePlaylist(oldIndex,this.indexAudio)
        // this.loadNewTrack(this.indexAudio);
    }
  }


audioa[i].load()
alert(i)
audioa[i].volume=0.75

audioa[i].addEventListener("timeupdate",showDur)
function showDur(){
    document.querySelector(".audio-currentTime").innerHTML=("0"+ Math.floor(audioa[i].currentTime/60)).slice(-2)+":"+("0"+
    Math.ceil(audioa[i].currentTime%60)).slice(-2);
    document.querySelector(".audio-totalDuration").innerHTML=("0"+Math.floor(audioa[i].duration/60)).slice(-2)+":"+("0"+Math.ceil(audioa[i].duration%60)).slice(-2);
    document.querySelector(".current-bar").style.width=(audioa[i].currentTime/audioa[i].duration)*100+"%";
  
}
function playPause(){
var pausePlayIcon=document.querySelector(".play-icon")

  if(audioa[i].paused)
   {
        audioa[i].play()
     pausePlayIcon.innerHTML="pause_circle_outline"
    }
  else {audioa[i].pause()
    pausePlayIcon.innerHTML="play_circle_outline"
    }
}
function skipToThere(event){
    var totalWidth=parseInt(window.getComputedStyle(document.querySelector('.show-bar')).width);
   
    var x=event.offsetX;
    var fraction=x/totalWidth
    var clickedPoint=fraction*audioa[i].duration
    audioa[i].currentTime=clickedPoint
}

var count=0;
var rsnArray=["repeat_one","shuffle","repeat"]
function repeatShuffleNone(){
    if(count>2)
     {count=0;
    audioa[i].loop=false}
    if(count==0)
     audioa[i].loop=true
    document.querySelector(".repeatShuffleNone").innerHTML= rsnArray[count]
    count++;


}
function changeVolume(event){
    var totalWidth=parseInt(window.getComputedStyle(document.querySelector('.volume-slider-container')).width);
    
    var x=event.offsetX;
    var fraction=x/totalWidth
    audioa[i].volume=fraction
    document.querySelector(".volume-slider").style.width=fraction*100+"%";
}

var count2=0;
function expAndComPlayer(){

    var maxMinButton=document.querySelector(".maxmin");
    maxMinButton.innerHTML=(count2%2==0)?"expand_more":"expand_less"
    count2++
    var audioNode=document.querySelector(".audio")
    audioNode.classList.toggle("audiomin")
    document.querySelector(".singer").classList.toggle("singermin")
    document.querySelector(".audio-img-title").classList.toggle("singermin")
    var minNotReqButtons=document.querySelectorAll(".controls > button")
    minNotReqButtons.forEach((item)=>{
        item.classList.toggle("singermin")
    })

    document.querySelector(".title").classList.toggle("minFontSize")
    document.querySelector(".next-prev-play-pause").classList.toggle("minWidth")
    document.querySelector(".volume-container").classList.toggle("minWidth")


}

    // document.querySelector('.audio-img-title').display="none"
