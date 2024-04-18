//This is to check the md5 function is returning 32 character hexadecimal string.
describe("md5Encrypt function test", function() {
    it("This should return a 32 character hexadecimal string.", function() {
        var loginResult = md5Encrypt("HexaDecimalValue");
        expect(loginResult).toMatch(/^[0-9a-f]{32}$/);
    });
});

//This is to check the checklogin function is returning proper values as per the input provided.
describe("checkLogin function", function() {
    it("should return true for valid username and password.", function() {
        var loginResult = checkLogin("Suyash@humber.ca", "Suyash");
        expect(loginResult).toBe(true);
    });

    it("should return 'Invalid username or password.' for incorrect username or password.", function() {
        var loginResult = checkLogin("WrongUserName", "Suyash");
        expect(loginResult).toBe("Invalid username or password.");
        
        loginResult = checkLogin("Suyash@humber.ca", "WrongPassword");
        expect(loginResult).toBe("Invalid username or password.");
    });

    it("should return 'No username entered.' if no username is entered.", function() {
        var loginResult = checkLogin("", "Suyash");
        expect(loginResult).toBe("No username entered.");

        loginResult = checkLogin(null, "Suyash");
        expect(loginResult).toBe("No username entered.");

        loginResult = checkLogin(undefined, "Suyash");
        expect(loginResult).toBe("No username entered.");
    });

    it("should return 'No password entered.' if no password is entered.", function() {
        var loginResult = checkLogin("Suyash@humber.ca", "");
        expect(loginResult).toBe("No password entered.");

        loginResult = checkLogin("Suyash@humber.ca", null);
        expect(loginResult).toBe("No password entered.");

        loginResult = checkLogin("Suyash@humber.ca", undefined);
        expect(loginResult).toBe("No password entered.");
    });
});
