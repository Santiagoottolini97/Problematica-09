var namer = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rPassword = document.getElementById("rPassword");
var error = document.getElementById("error");
var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

error.style.color = "red";

function validationRegister() {
  var messageError = [];
  if (namer.value === "" || namer.value === null) {
    messageError.push("Complete the name");
  }
  if (email.value == "" || email.value == null) {
    messageError.push("Complete the email");
  } else if (!isEmail(email.value)) {
    messageError.push("The email is not valid");
  }
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  }
  if (rPassword.value === "" || rPassword.value === null) {
    messageError.push("Repeat your password please");
  }
  if (password.value !== rPassword.value) {
    messageError.push("Write the same password");
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
