const button = document.querySelector(`.btn`);
const email = document.querySelector('input');
const response = document.querySelector(".response")
const input = document.querySelector('[name="email-address"]');
// response.textContent = 'Please provide a valid email address'


function click (event) {

    const emailid = email.value
    event.preventDefault();

    if (!emailid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      response.textContent = "Please provide a valid email address";
    } else {
      console.log("thanks");
    }
}

button.addEventListener(`click`, click);
input.addEventListener('click', function clear () {
  response.textContent = null;
})



console.log ('script working');
console.log (button);
console.log (email.textContent);