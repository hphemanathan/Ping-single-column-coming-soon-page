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
     response.textContent = "Email address cannot be blank!";
     inputBox.classList.add("error");
     inputBox.classList.remove("success");
     response.classList.remove("success");

     }else if(!emailid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      response.textContent = "Please provide a valid email address";
      inputBox.classList.add("error");
      inputBox.classList.remove("success");
      response.classList.remove("success");
      

    }else {
      response.textContent = "you have sucessfully subscribed, Thanks you!";
      inputBox.classList.remove("error");
      inputBox.classList.add("success");
      response.classList.add("success");
      console.log(emailid);

    }
    
  }

button.addEventListener(`click`, click);


