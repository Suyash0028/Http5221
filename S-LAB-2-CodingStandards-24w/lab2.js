
window.onload = bemStandards;

function bemStandards() {
    "use strict";
    var loginButton = document.querySelector(".login__button");
    var outputUserName = document.querySelector(".output__user");
    var outputPassword = document.querySelector(".output__pass");
    var output = document.querySelector(".output");
    var userName = document.querySelector(".login__username");
    var password = document.querySelector(".login__password");
    loginButton.addEventListener("click", onSubmit);
    function onSubmit() {
        if (userName.value !== "") {
            userName.classList.remove("login__txtbox_error");
        } else {
            userName.classList.add("login__txtbox_error");
            userName.focus();
            return false;
        }
        if (password.value !== "") {
            password.classList.remove("login__txtbox_error");
        } else {
            password.classList.add("login__txtbox_error");
            password.focus();
            return false;
        }
        output.style.display = "block";
        outputUserName.innerHTML = userName.value;
        outputPassword.innerHTML = password.value;
        return false;
    }
}