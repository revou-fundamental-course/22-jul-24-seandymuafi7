const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const usernameErrorElement = document.getElementById('username-error')
const emailErrorElement = document.getElementById('email-error')

form.addEventListener('submit', (e) => {
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if(username.value === '' || username.value == null)
   {
      e.preventDefault();
      username-error.innerText = "Name is required";
   }
   else
   {
      username-error.innerText = "";
   }
   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email-error.innerText = "Valid Email is required";
   }
   else
   {
      email-error.innerText = "";
   }

})