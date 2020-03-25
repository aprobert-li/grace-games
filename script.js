var randomNumber;
var usedArray = [];

var btn = document.querySelector("button");

btn.addEventListener("click", getNumber);

function getNumber() {
  console.log("NEW CLICK");
  randomNumber = Math.floor(Math.random() * 10);
  if (!usedArray.includes(randomNumber)) {
    console.log(randomNumber);
    usedArray.push(randomNumber);
    console.log(usedArray);
    return randomNumber;
  } else {
    console.log("already used");
    if (usedArray.length < 10) {
      getNumber();
    } else {
      btn.removeEventListener("click", getNumber);
    }
  }
}

var audio;
var audioBoom;

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
    }

  });
}
