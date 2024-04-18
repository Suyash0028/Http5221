//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number (n or N followed by 8 digits).
 * Returns true if input validates, otherwise returns false.
 * @param {string} idIn
 */


var pattern = /^[Nn]\d{8}$/;

function checkHumbrId(humberId){
    if(pattern.test(humberId)){
        return true;
    }
    else{
        return false;
    }
}
