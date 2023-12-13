const button = document.querySelector(`.btn`);
const email = document.querySelector('input');

const alert = document.createElement('p')
alert.textContent = 'Please provide a valid email address'


function click (event) {

    const emailid = email.value
    event.preventDefault();

    if (!emailid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      email.insertAdjacentElement("beforebegin", alert);
    } else {
      console.log("thanks");
    }
}

button.addEventListener(`click`, click);


console.log ('script working');
console.log (button);
console.log (email.textContent);