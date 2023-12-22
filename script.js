const button = document.querySelector(`.btn`);
const email = document.querySelector('input');
const response = document.querySelector(".section__subscribe--response");
const input = document.querySelector('[name="email-address"]');
const inputBox = document.querySelector(".section__subscribe__input--box");
// response.textContent = 'Please provide a valid email address'


function click (event) {

    const emailid = email.value
    event.preventDefault();

     if(emailid.length===0) {
      console.log('enter email id');

     }else if(!emailid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      response.textContent = "Please provide a valid email address";
      inputBox.classList.add("error");
    }else {

      response.textContent = "you have sucessfully subscribed, Thanks you!";
      inputBox.classList.remove("error");
    }
    
  }


button.addEventListener(`click`, click);
// input.addEventListener('click', function clear () {
//     response.textContent='';
// })



console.log ('script working');
console.log (button);
console.log (email.textContent);