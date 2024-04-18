// lab-4-guess.spec.js

describe("Guess-a-Number (1-10) function", () => {

    describe("Test to pass ",function(){
        it("should return 'You guessed it' for the correct number", () => {
            expect(guessNum(4)).toEqual("You guessed it!");
        });
    
        it("should return 'Guess again.' for any number between 1 and 10 which is not correct", () => {
            expect(guessNum(5)).toEqual("Guess again.");
        });
    });
    
  
    describe("Test to fail",function(){
        it("should return 'A number was not input.' if the value entered is not a number", () => {
            expect(guessNum("notANumber")).toEqual("A number was not input.");
        });
    
        it("should return 'A value was not entered.' if it receives an empty string", () => {
            expect(guessNum("")).toEqual("A value was not entered.");
        });
    
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values", () => {
            expect(guessNum(15)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    });

    describe("Boundary test",function(){
        it("should return 'Guess again.' for the lower boundary", () => {
            expect(guessNum(1)).toEqual("Guess again.");
        });
    
        it("should return 'Way off!!!! Pick between 1 and 10.' for the upper boundary", () => {
            expect(guessNum(11)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    
        it("should return 'Way off!!!! Pick between 1 and 10.' for the lower boundary", () => {
            expect(guessNum(0)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    
        it("should return 'Guess again.' for the lower boundary", () => {
            expect(guessNum(2)).toEqual("Guess again.");
        });
    
        it("should return 'Guess again.' for a upper boundary number", () => {
            expect(guessNum(9)).toEqual("Guess again.");
        });
    
        it("should return 'Guess again.' for a number equal to 10", () => {
            expect(guessNum(10)).toEqual("Guess again.");
        });
    });
});