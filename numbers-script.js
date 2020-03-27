var randomNumber;
var usedArray = [];
//var numberCount = 0;

var audio;
var numberAudio;
var audioBoom;

var btn = document.querySelector("#startBtn");

btn.addEventListener("touchstart", getNumber);
btn.addEventListener("mouseup", getNumber);

var cover = document.querySelector('#cover');

function getNumber() {
  btn.removeEventListener("touchstart", getNumber);
  btn.removeEventListener("mouseup", getNumber);
  cover.style.display = "none";
  replay.style.display = "inline-block";
  console.log("NEW CLICK");
  randomNumber = Math.floor(Math.random() * 10);
  if (!usedArray.includes(randomNumber)) {
    console.log(randomNumber);
    usedArray.push(randomNumber);
    console.log(usedArray);
    numberAudio = document.createElement('audio');
    numberAudio.src=`audio/${randomNumber}.mp3`;
    numberAudio.play();
    choosing();
    return randomNumber;
  } else {
    console.log("already used");
    if (usedArray.length < 10) {
      getNumber();
    } 
    else {
      btn.removeEventListener("touchstart", getNumber);
      btn.removeEventListener("mouseup", getNumber);
    }
  }
  
}

function choosing() {
  var counter = 0;
  var numbers = document.querySelectorAll(".numLets");
  var unicorns = document.querySelectorAll('.unicorns');

  function chooseNumber() {
    var chosen = this.dataset.number;
    var chosenEl = document.getElementById(this.id);
    console.log(chosen);

    if (randomNumber !== chosen) {
        audio = document.createElement('audio');
        audio.src=`audio/${chosen}.mp3`;
        audio.play();
    }
    
    if (randomNumber == chosen && counter < 10) {
        chosenEl.style.backgroundColor = "#F3A3E1";
        audio.pause();
        audioBoom = document.createElement('audio');
        audioBoom.src="audio/correct.mp3";
        audioBoom.play();
        cover.style.display = "block";
        btn.addEventListener("touchstart", getNumber);
        btn.addEventListener("mouseup", getNumber);
        replay.style.display = "none";
        unicorns[counter].style.opacity = 1;
        counter++;
        
        if(counter == 10) {
          alert("ALL DONE");
        }
    }
  }
  for (n of numbers) {
    n.addEventListener("touchstart", chooseNumber);
    n.addEventListener("mouseup", chooseNumber);
  }
}

var replay = document.querySelector('#replay');
replay.addEventListener("touchstart", replayAudio);
replay.addEventListener("mouseup", replayAudio);
function replayAudio() {
  numberAudio.play();
}



