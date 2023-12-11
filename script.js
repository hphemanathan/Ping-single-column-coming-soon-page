const button = document.querySelector(`.btn`);

function clicking () {
    console.log ('click working')
}

button.addEventListener('click', clicking);

function toggleRound() {
  pic.classList.toggle("round");
}

button.addEventListener("click", toggleRound);


console.log ('script working');
console.log (button);