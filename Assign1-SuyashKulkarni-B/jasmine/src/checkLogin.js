/**
 * Check Login function is used to validate the user input wheather it is true or false.
 * @param {string} userName - This is username entered by user
 * @param {string} password - This is password entered by user
 * @return {boolean} 
 * If everything is correct it returns true.
 * 'User name or password is wrong please type in again' used for if the user or pass is not correct.
 * "No username entered." If nothing is entered in the username field.
 * "No password entered." If nothing is entered in the password field.
 */

function checkLogin(userName, password) {
    "use strict";

    // static valid username and password
    var validUser = "Suyash@humber.ca";
    var validPass = md5Encrypt("Suyash");
    
    //If the entered username is empty then it will show No username entered.
    if (userName === "" || userName === null || userName === undefined) {
        return "No username entered.";
    } 

    //If the entered password is empty then it will show No password entered.
    if (password === "" || password === null || password === undefined) {
        return "No password entered.";
    } 

    //If the entered username or password does not match with valid username and password it will return Invalid username or password.
    if (userName !== validUser || md5Encrypt(password) !== validPass) {
        return "Invalid username or password.";
    }

    //If everything is true it will return true
    return true;
}