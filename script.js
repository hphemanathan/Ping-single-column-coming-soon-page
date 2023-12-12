const button = document.querySelector(`.btn`);
const email = document.querySelector('input');


function click (event) {

    const emailid = email.value
    event.preventDefault();

    if (!emailid.includes("@" & ".")) {
        console.log ('please enter valid email')
        alert("please enter valid email");
    } else {
        console.log ('thanks')
    }
}

button.addEventListener(`click`, click);


console.log ('script working');
console.log (button);
console.log (email.textContent);