
// Onload wrapper function 
window.onload = function(){
    //Event listener for login button
    document.querySelector(".login__button").addEventListener("click", function() {
        
        var output = document.querySelector(".output");
        var userName = document.querySelector(".login__username");
        var password = document.querySelector(".login__password");

        //Calling check login function to valid the username and password
        /**
         * @param {string} userName - Username fecthed from the input controller
         * @param {string} password - password fecthed from the input controller
         * @returns {any} 
         * This function return true if the user and password is true and strinf message if the username and password is wrong.
         */
        var loginResult = checkLogin(userName.value, password.value);

        //Validating the recieved result from the check login function if it's true show welcom eback message.
        if(loginResult === true){
            output.style.display = "block";
            output.innerHTML = "Welcome back!";
        } else{
            output.style.display = "block";
            output.innerHTML = loginResult;
        }
    });
}