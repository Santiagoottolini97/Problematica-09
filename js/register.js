var namer = document.getElementById("password");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rPassword = document.getElementById("rPassword");
var error = document.getElementById("error");

error.style.color = "red";

function validationRegister() {
  var messageError = [];
  if (namer.value === "" || namer.value === null) {
    messageError.push("Complete the name");
  }
  if (email.value === "" || email.value === null) {
    messageError.push("Complete the email");
  }
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  }
  if (rPassword.value === "" || rPassword.value === null) {
    messageError.push("Complete the password");
  }
  error.innerHTML = messageError.join(", ");
  return false;
}
