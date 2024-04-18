// lab-4-guess.spec.js

describe('Guess-a-Number (1-10) function', () => {
    describe("Test to pass ",function(){
        it('should return "You guessed it" for the correct number', () => {
            expect(guessNum(7, 7)).toEqual('You guessed it!');
        });
    
        it('should return "Guess again." for any number between 1 and 10 which is not correct', () => {
            expect(guessNum(3, 7)).toEqual('Guess again.');
        });
    });
    
  
    describe("Test to fail",function(){
        it('should return "A number was not input." if the value entered is not a number', () => {
            expect(guessNum('notANumber', 7)).toEqual('A number was not input.');
        });
    
        it('should return "A value was not entered." if it receives an empty string', () => {
            expect(guessNum('', 7)).toEqual('A value was not entered.');
        });
    
        it('should return "Way off!!!! Pick between 1 and 10." if the value entered is a number outside of the allowed range of guessing values', () => {
            expect(guessNum(15, 7)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
    });
    
    describe("Boundary test",function(){
        it('should return "Guess again." for the lower boundary (1)', () => {
            expect(guessNum(1, 7)).toEqual('Guess again.');
        });
    
        it('should return "Guess again." for the upper boundary (10)', () => {
            expect(guessNum(10, 7)).toEqual('Guess again.');
        });
    
        it('should return "You guessed it!" for the lower boundary (1)', () => {
            expect(guessNum(1, 1)).toEqual('You guessed it!');
        });
    
        it('should return "You guessed it!" for the upper boundary (10)', () => {
            expect(guessNum(10, 10)).toEqual('You guessed it!');
        });
    
        it('should return "A number was not input." for a negative number', () => {
            expect(guessNum(-5, 7)).toEqual('A number was not input.');
        });
    
        it('should return "Way off!!!! Pick between 1 and 10." for a number greater than 10', () => {
            expect(guessNum(12, 7)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
    });
});