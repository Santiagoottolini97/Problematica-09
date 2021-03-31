var namer = document.getElementById("password");
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
  if (email.value.match(emailCheck)) {
    messageError.push("Complete the email");
  }
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  }
  if (rPassword.value === "" || rPassword.value === null) {
    messageError.push("Complete the password");
  }
  else{
    messageError.push("Every validation has passed");
  }
  error.innerHTML = messageError.join(", ");
  return false;
}
