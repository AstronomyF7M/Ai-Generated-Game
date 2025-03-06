// Simple JavaScript Game: Guess the Number

let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

function guessNumber(userGuess) {
    attempts++;
    if (userGuess < min || userGuess > max) {
        return 'Please guess a number between ' + min + ' and ' + max;
    }
    if (userGuess === randomNumber) {
        return 'Congratulations! You guessed the number in ' + attempts + ' attempts!';
    } else if (userGuess < randomNumber) {
        return 'Too low! Try again.';
    } else {
        return 'Too high! Try again.';
    }
}

// Example of how to use the function
console.log(guessNumber(50)); // Replace 50 with your guess
