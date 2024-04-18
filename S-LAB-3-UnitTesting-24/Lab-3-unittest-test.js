//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========



function test__checkHumbrId(valueIn, expectedOutput){
    "use strict";

    var dataOutput = document.getElementById("data");
    var result = checkHumbrId(valueIn);// Calling the function to check the value
    
    var finalMsg;

    if(result === expectedOutput){
        finalMsg = "<span style='color:green;'>==PASSED==</span><br/>";
    }
    else{
        finalMsg = "<span style='color:red;'>XXFAILEDXX</span></br>";
    }
    var msg = "Value tested: " + valueIn + " " + "Expected result: " + expectedOutput + " " +finalMsg;
    dataOutput.innerHTML += msg;
    finalMsg = "";
}

//True conditions to check
test__checkHumbrId("N12345678", true);
test__checkHumbrId("n98765432", true);
//False condition with wrong humber id
test__checkHumbrId("876N54321", false);
test__checkHumbrId("M12345678", false);
//Condition to check length
test__checkHumbrId("N234567", false);
test__checkHumbrId("N123456789", false);