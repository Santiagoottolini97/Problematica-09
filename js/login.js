var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');

email.addEventListener('textInput', emailValidation);
password.addEventListener('textInput', passwordValidation);

function validatedLogin(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		emailError.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		passwordError.style.display = "block";
		password.focus();
		return false;
	}

}
function emailValidation(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		emailError.style.display = "none";
		return true;
	}
}
function passwordValidation(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		passwordError.style.display = "none";
		return true;
	}
}