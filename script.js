var randomNumber;
var usedArray = [];
//var numberCount = 0;

var audio;
var numberAudio;
var audioBoom;

var btn = document.querySelector("button");

btn.addEventListener("click", getNumber);

var cover = document.querySelector('#cover');

function getNumber() {
  btn.removeEventListener("click", getNumber);
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
      btn.removeEventListener("click", getNumber);
    }
  }
  
}


function choosing() {
  var counter = 0;
  var numbers = document.querySelectorAll(".numbers");
  for (n of numbers) {
    n.addEventListener("click", function() {
      var chosen = this.dataset.number;
      var chosenEl = document.getElementById(this.id);
      console.log(chosen);

      if (randomNumber !== chosen) {
          audio = document.createElement('audio');
          audio.src=`audio/${chosen}.mp3`;
          audio.play();
      }
      
      if (randomNumber == chosen) {
          chosenEl.style.backgroundColor = "yellow";
          audio.pause();
          audioBoom = document.createElement('audio');
          audioBoom.src="audio/correct.mp3";
          audioBoom.play();
          cover.style.display = "block";
          btn.addEventListener("click", getNumber);
          replay.style.display = "none";
          counter++;
          if(counter == 10) {
            alert("ALL DONE");
          }
      }
    });
  }
}

var replay = document.querySelector('#replay');
replay.addEventListener("click", function() {
  numberAudio.play();
})



