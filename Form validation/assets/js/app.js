
let form = document.querySelector("form");
let user = document.querySelector(".user");
let email = document.querySelector(".emaill");
let password = document.querySelector(".firstPass");
let secondPassword = document.querySelector(".secondPass"); 
let RegEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkError();
});

function checkError() {

    if (user.value === "") {
        errorHandling("Please write your user name", user)
    } else if (user.value[0].toUpperCase() != user.value[0]) {
        errorHandling("Please capitalize first letter", user)
    } else if (user.value.length < 6) {
        errorHandling("Username must be min 6 characters", user)
    } else {
        successBorder(user);
    }



    if (email.value === "") {
        errorHandling("Please write your email address", email)
    } else if (!RegEmail.test(email.value)) {
        errorHandling("Wrong Email structure", email)
    } else {
        successBorder(email);
    }


    if (password.value === "") {
        errorHandling("Please write your password", password)
    } else if (password.value.length < 6 || password.value.length > 10) {
        errorHandling('Password must be between 6-10 characters', password)
    } else if (!regularExpression.test(password.value)) {
        errorHandling('password should contain at least one number and one special character', password)

    } else {
        successBorder(password);
    }


    if (secondPassword.value === "") {
        errorHandling("Please confirm your password", secondPassword)
    } else if (password.value !== secondPassword.value) {
        errorHandling("Your password does not match", secondPassword)
    }
    else {
        successBorder(secondPassword);
    }
}



function errorHandling(text, input) {
    const parentElement = input.parentElement;
    const message = parentElement.querySelector(".error");
    message.innerText = text;
    message.classList.add("active");
    parentElement.classList.add('errorBorder')
}
function successBorder(input) {
    const parentElement = input.parentElement;
    parentElement.classList.add("greenBorder");
    const errorMessage = parentElement.querySelector(".error");
    if (errorMessage) {
        errorMessage.remove();
    }
}



