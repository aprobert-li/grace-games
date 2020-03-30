var randomNumber;
var usedArray = [];
//var numberCount = 0;
//var numberAudio;

var audio;
var audioEl = [];
var audioId = [];
var audioBoom;
audioBoom = document.createElement('audio');
audioBoom.src="audio/correct.mp3";
audioBoom.autoplay=true;

//Create all the audio elements
for (a=0; a < 10; a++) {
    audioEl[a] = document.createElement('audio');
    audioEl[a].src=`audio/${a}.mp3`;
    audioEl[a].autoplay=true;
}

var btn = document.querySelector("#startBtn");

//btn.addEventListener("touchend", getNumber);
btn.addEventListener("click", getNumber);

var cover = document.querySelector('#cover');

var buttons = document.querySelectorAll('.button');
if (window.innerWidth < 1000) {
  btn.style.fontSize = "3vw";
}

function getNumber() {
  //btn.removeEventListener("touch", getNumber);
  btn.removeEventListener("click", getNumber);
  cover.style.display = "none";
  replay.style.display = "inline-block";
  randomNumber = Math.floor(Math.random() * 10);
  if (!usedArray.includes(randomNumber)) {
    usedArray.push(randomNumber);
    //numberAudio = document.createElement('audio');
    //numberAudio.src=`audio/${randomNumber}.mp3`;
    console.log(randomNumber);
    audioEl[randomNumber].play();
    chooseNumber();
    return randomNumber;
  } else {
    if (usedArray.length < 10) {
      getNumber();
    } 
    else {
      //btn.removeEventListener("touch", getNumber);
      btn.removeEventListener("click", getNumber);
    }
  }
}

  var counter = 0;
  
  var numbers = document.querySelectorAll(".numLets");
  var unicorns = document.querySelectorAll('.unicorns');

  function chooseNumber() {
    var chosen = this.dataset.number;
    var chosenEl = document.getElementById(this.id);

    if (randomNumber !== chosen) {
        //audio = document.createElement('audio');
        //audio.src=`audio/${chosen}.mp3`;
        audioEl[chosen].play();
    }
    
    if (randomNumber == chosen && counter < 10) {
        chosenEl.style.backgroundColor = "#F3A3E1";
        audio[chosen].pause();
        audioBoom.play();
        cover.style.display = "block";
        //btn.addEventListener("touch", getNumber);
        btn.addEventListener("click", getNumber);
        replay.style.display = "none";
        unicorns[counter].style.opacity = 1;
        counter++;
        
        if(counter == 10) {
          playAgainBtn.style.display="block";
          congrats.style.display="block";
          gameOver.style.display="block";
        }
    }
  }
  for (n of numbers) {
    //n.addEventListener("touch", chooseNumber);
    n.addEventListener("click", chooseNumber);
  }

var replay = document.querySelector('#replay');
//replay.addEventListener("touch", replayAudio);
replay.addEventListener("click", replayAudio);
function replayAudio() {
  //numberAudio.play();
  audioEl[randomNumber].play();
}

var playAgainBtn = document.querySelector('#playagain');
var gameOver =document.querySelector('#gameover');
var congrats =document.querySelector('#congrats');
//playAgainBtn.addEventListener('touch', playagain);
playAgainBtn.addEventListener("click", playagain);


function playagain() {
  
  playAgainBtn.style.display="none";
  congrats.style.display="none";
  gameOver.style.display="none";
  counter=0;
  for (u of unicorns) {
    u.style.opacity=0;
  }
  for (n of numbers) {
    n.style.backgroundColor="white";
  }
  //btn.addEventListener("touch", getNumber);
  btn.addEventListener("click", getNumber);
  usedArray = [];
}



