
var randomNumber = Math.floor((Math.random()*100));
var randTest = Math.floor((Math.random()*10));
var showNumber = document.querySelector('#randomNumber');
showNumber.innerHTML = randTest;
var audio;
var audioBoom;

var numbers = document.querySelectorAll(".numbers");
for (n of numbers) {
  n.addEventListener("click", function() {
    var chosen = this.dataset.number;
    console.log(chosen);

    if (randTest !== chosen) {
        audio = document.createElement('audio');
        audio.src=`audio/${chosen}.mp3`;
        audio.play();
    }
    
    if (randTest == chosen) {
        audio.pause();
        audioBoom = document.createElement('audio');
        audioBoom.src="audio/correct.mp3";
        audioBoom.play();
    }

  });
}
