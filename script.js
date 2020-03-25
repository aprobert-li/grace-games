var usedArray = [];

var showNumber = document.querySelector("#randomNumber");

var btn = document.querySelector("button");

btn.addEventListener("click", getNumber);


function getNumber() {
  console.log("NEW CLICK");
  var randomNumber = Math.floor(Math.random() * 10);
  if (!usedArray.includes(randomNumber)) {
    console.log(randomNumber);
    usedArray.push(randomNumber);
    console.log(usedArray);
    showNumber.innerHTML = randomNumber;
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
