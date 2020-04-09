
//Covers the numbers so they can't be clicked after selecting correct answer
var cover = document.querySelector('#cover');

//Variables for storing numbers
var randomNumber;
var usedArray = [];
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "sh", "ch", "th", "ing"];

//Variables for audio
var audioEl = [];
var audioBoom;
var audiocongrats;
audioBoom = document.createElement('audio');
audioBoom.src="audio/correct.mp3";

//Create all the audio elements
for (a=0; a < lettersArray.length; a++) {
    audioEl[a] = document.createElement('audio');
    audioEl[a].src=`audio/${lettersArray[a]}.mp3`;
}

//Getting a new random number

var btn = document.querySelector("#startBtn");
btn.addEventListener("click", getLetter);


function getLetter() {
  //Styling to make sure the cover is gone and REPLAY button shows
  cover.style.display = "none";
  replay.style.display = "inline-block";

  //Create random number and remove click event so it won't create another number yet
  randomNumber = Math.floor(Math.random() * 30);
  btn.removeEventListener("click", getLetter);

  //Conditional logic to be make sure it gets a number that hasn't been used yet
  if (!usedArray.includes(randomNumber)) {
    audioEl[randomNumber].play();
    usedArray.push(randomNumber);
    //audioEl[randomNumber].addEventListener("ended", chooseLetter);
    chooseLetter();
  } else {
    getLetter();
  }
}
//Variables for all the numbers, count correct answers, and for the unicorns
  var counter = 0;
  var numbers = document.querySelectorAll(".numLets");
  var unicorns = document.querySelectorAll('.unicorns');

  function chooseLetter() {
    //Get the number that has been clicked
    var chosen = this.dataset.number;
    var chosenEl = document.getElementById(this.id);

    //If the clicked number is NOT the same as the random number then play the number's audio
    if (randomNumber !== chosen) {
        
        audioEl[randomNumber].play();
    }
    
    //If the clicked number and random number are the same and the counter is less than 10, then do stuff
    if (randomNumber == chosen && counter < 10) {
        chosenEl.style.backgroundColor = "#F3A3E1";
        audioEl[randomNumber].pause();
        audioBoom.play();
        cover.style.display = "block";
        btn.addEventListener("click", getLetter);
        replay.style.display = "none";
        unicorns[counter].style.opacity = 1;
        counter++;
        
        if(counter == 10) {
          playAgainBtn.style.display="block";
          congrats.style.display="block";
          gameOver.style.display="block";
          unicorn_win.style.display = "block";
          audioBoom.pause();
          audiocongrats = document.createElement('audio');
          audiocongrats.src = "audio/congratulations.mp3";
          audiocongrats.play();
        }
    }
  }
  for (n of numbers) {
    n.addEventListener("click", chooseLetter);
  }


//Play the random number audio again in case player forgot or needs to hear it again

var replay = document.querySelector('#replay');
replay.addEventListener("click", replayAudio);

function replayAudio() {
  audioEl[randomNumber].play();
}


//Play the game again.  Reset all the variables back to the start state

var playAgainBtn = document.querySelector('#playagain');
var gameOver =document.querySelector('#gameover');
var congrats =document.querySelector('#congrats');
var unicorn_win = document.querySelector('#unicorn-win');
playAgainBtn.addEventListener("click", playagain);

function playagain() {
  playAgainBtn.style.display="none";
  congrats.style.display="none";
  gameOver.style.display="none";
  unicorn_win.style.display="none";
  counter=0;
  for (u of unicorns) {
    u.style.opacity=0;
  }
  for (n of numbers) {
    n.style.backgroundColor="white";
  }

  usedArray = [];
  console.log("Used array is " + usedArray);
  console.log("counter is " + counter);
  console.log("random number is " + randomNumber);
}



