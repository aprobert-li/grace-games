//var numberCount = 0;
//var numberAudio;
//var audio;

//UI Variables

//Covers the numbers so they can't be clicked after selecting correct answer
var cover = document.querySelector('#cover');
var h4 = document.querySelector('h4');
h4.style.color = 'red';

//Responsive design stuff
var buttons = document.querySelectorAll('.button');
if (window.innerWidth < 1000) {
  btn.style.fontSize = "3vw";
}

//Variables for storing numbers
var randomNumber;
var usedArray = [];

//Variables for audio
var audioEl = [];
var audioBoom;
audioBoom = document.createElement('audio');
audioBoom.src="audio/correct.mp3";
audioBoom.autoplay=true;

//Create all the audio elements
for (a=0; a < 10; a++) {
    audioEl[a] = document.createElement('audio');
    audioEl[a].src=`audio/${a}.mp3`;
    //audioEl[a].autoplay=true;
}

//Getting a new random number
var btn = document.querySelector("#startBtn");
//btn.addEventListener("click", getNumber);
 btn.addEventListener("touch", getNumber);


function getNumber() {
  //Styling to make sure the cover is gone and REPLAY button shows
  cover.style.display = "none";
  replay.style.display = "inline-block";

  //Create random number and remove click event so it won't create another number yet
  randomNumber = Math.floor(Math.random() * 10);
  btn.removeEventListener("click", getNumber);

  //Conditional logic to be make sure it gets a number that hasn't been used yet
  if (!usedArray.includes(randomNumber)) {
    audioEl[randomNumber].play();
    usedArray.push(randomNumber);
    audioEl[randomNumber].addEventListener("ended", chooseNumber);
    //numberAudio = document.createElement('audio');
    //numberAudio.src=`audio/${randomNumber}.mp3`;    
    //chooseNumber();
    //return randomNumber;
  } else {
    getNumber();
    /*if (usedArray.length < 10) {
      getNumber();
    } 
    else {
      btn.removeEventListener("click", getNumber);
    }*/
  }
}

//Variables for all the numbers, count correct answers, and for the unicorns
  var counter = 0;
  var numbers = document.querySelectorAll(".numLets");
  var unicorns = document.querySelectorAll('.unicorns');

  function chooseNumber() {
    //Get the number that has been clicked
    var chosen = this.dataset.number;
    var chosenEl = document.getElementById(this.id);

    //If the clicked number is NOT the same as the random number then play the number's audio
    if (randomNumber !== chosen) {
        //audio = document.createElement('audio');
        //audio.src=`audio/${chosen}.mp3`;
        audioEl[chosen].play();
    }
    
    //If the clicked number and random number are the same and the counter is less than 10, then do stuff
    if (randomNumber == chosen && counter < 10) {
        chosenEl.style.backgroundColor = "#F3A3E1";
        audioEl[chosen].pause();
        audioBoom.play();
        cover.style.display = "block";
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
    n.addEventListener("click", chooseNumber);
  }


//Play the random number audio again in case player forgot or needs to hear it again
var replay = document.querySelector('#replay');
replay.addEventListener("click", replayAudio);

function replayAudio() {
  //numberAudio.play();
  audioEl[randomNumber].play();
}


//Play the game again.  Reset all the variables back to the start state

var playAgainBtn = document.querySelector('#playagain');
var gameOver =document.querySelector('#gameover');
var congrats =document.querySelector('#congrats');
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
  //btn.addEventListener("click", getNumber);
  usedArray = [];
  console.log("Used array is " + usedArray);
  console.log("counter is " + counter);
  console.log("random number is " + randomNumber);
}



