
//Covers the numbers so they can't be clicked after selecting correct answer
var cover = document.querySelector('#cover');

//Variables for storing numbers
var randomNumber;
var usedArray = [];
var picsArray = [];

//Variables for audio
var audioBoom;
var audiocongrats;
audioBoom = document.createElement('audio');
audioBoom.src="audio/correct.mp3";
var audiowrong = document.createElement('audio');
audiowrong.src="audio/wrong.mp3";


//Getting a new random number

var btn = document.querySelector("#startBtn");
btn.addEventListener("click", getImage);
var currentPic = document.querySelector('#currentpic');

function getImage() {
  //Styling to make sure the cover is gone
  cover.style.display = "none";

  //Create random number and remove click event so it won't create another number yet
  randomNumber = Math.floor(Math.random() * 20);
  btn.removeEventListener("click", getImage);
  currentPic.src = `images/${picsArray[randomNumber]}`;

  //Conditional logic to be make sure it gets a number that hasn't been used yet
  if (!usedArray.includes(randomNumber)) {
    usedArray.push(randomNumber);
    chooseWord();
  } else {
    getImage();
  }
}
//Variables for all the numbers, count correct answers, and for the unicorns
  var counter = 0;
  var numbers = document.querySelectorAll(".numLets");
  var unicorns = document.querySelectorAll('.unicorns');

  function chooseWord() {
    //Get the number that has been clicked
    var chosen = this.dataset.number;
    var chosenEl = document.getElementById(this.id);
    console.log(chosen + " " + chosenEl)

    //If the clicked number is NOT the same as the random number then play the number's audio
    if (randomNumber !== chosen) {
        audiowrong.play();
    }
    
    //If the clicked number and random number are the same and the counter is less than 10, then do stuff
    if (randomNumber == chosen && counter < 5) {
        chosenEl.style.backgroundColor = "#F3A3E1";
        audiowrong.pause();
        audioBoom.play();
        cover.style.display = "block";
        btn.addEventListener("click", getImage);
        unicorns[counter].style.opacity = 1;
        counter++;
        
        if(counter == 5) {
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
    n.addEventListener("click", chooseWord);
    picsArray.push(n.id+".png");
    console.log(picsArray);
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
  currentPic.src="";
  counter=0;
  for (u of unicorns) {
    u.style.opacity=0;
  }
  for (n of numbers) {
    n.style.backgroundColor="white";
  }

  usedArray = [];
}



