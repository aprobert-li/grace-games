var numbersBtn = document.querySelector('#playNumbers');

numbersBtn.addEventListener("touchstart", goToPage);

function goToPage(event) {
    numbersBtn.style.backgroundColor = "red";
    window.location.href = "numbers.html";
    event.preventDefault();
    return false;
}