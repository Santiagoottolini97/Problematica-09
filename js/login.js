var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var pass = document.getElementById("error");

error.style.color = "red";

function validationLogin() {
  var messageError = [];
  if (email.value === "" || email.value === null) {
    messageError.push("Complete the email");
  } else if (!isEmail(email.value)) {
    messageError.push("The email is invalid");
  }
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  } 
  if (messageError.length == 0) {
    messageError.push("Every validation has passed");
  }

  error.innerHTML = messageError.join(", ");
  return false;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
