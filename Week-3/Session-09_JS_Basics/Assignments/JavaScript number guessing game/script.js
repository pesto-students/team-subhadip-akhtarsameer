let guessesTaken = 0;
let userGuess = 0;
function playGuessingGame(numToGuess, totalGuesses = 10) {
 
    while (guessesTaken < totalGuesses) {
       let userInput = prompt(getPromptText());
 
       if (userInput === null) {
          // User clicked cancel
          return 0;
       }
 
       userGuess = Number(userInput);
 
       if (isNaN(userGuess)) {
          alert("Please enter a number.");
          continue;
       }
 
       guessesTaken++;
 
       if (userGuess < numToGuess) {
          alert(userGuess + " is too small. Guess a larger number.");
       } else if (userGuess > numToGuess) {
          alert(userGuess + " is too large. Guess a smaller number.");
       } else {
          return guessesTaken;
       }
    }
 
    return 0;
 }
 
 function getPromptText() {
    if (guessesTaken === 0) {
       return "Enter a number between 1 and 100.";
    } else if (userGuess < numToGuess) {
       return userGuess + " is too small. Guess a larger number.";
    } else if (userGuess > numToGuess) {
       return userGuess + " is too large. Guess a smaller number.";
    } else {
       return "Please enter a number.";
    }
 }
 
 // Example usage
 let numToGuess = 5;
 let totalGuesses = 10;
 let result = playGuessingGame(numToGuess, totalGuesses);
 console.log("Number of guesses taken: " + result);
 