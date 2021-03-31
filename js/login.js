var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var pass = document.getElementById("error");

error.style.color = "red";

function validationLogin() {
  //Create an empty array
  var messageError = [];
  //validation email
  if (email.value === "" || email.value === null) {
    //a new position of array was created
    messageError.push("Complete the email");
  } 
  //if the mail not contain the necesary simbols, return a message of error
  else if (!isEmail(email.value)) {
    messageError.push("The email is invalid");
  }
  //validation password
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  }
  /*If the arrangement does not have any position, that is, all the 
  fields are created because it does not have an error message that shows 
  the message that it is correct*/
  if (messageError.length == 0) {
    messageError.push("Every validation has passed");
  }

  // The positions of array separate by ,
  error.innerHTML = messageError.join(", ");
  return false;
}

//function validation mail
function isEmail(email) {
  //test return a boolean 
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
