var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");

error.style.color = "red";

function validationLogin() {
  var messageError = [];
  if (email.value === "" || email.value === null) {
    messageError.push("Complete the email please");
  }
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password please");
  }
  error.innerHTML = messageError.join(", ");
  return false;
}
