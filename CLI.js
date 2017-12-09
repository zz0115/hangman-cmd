var inquirer = require("inquirer");
var letter = require("./letter.js");

var l;
var currentWordLetter = "";
var hiddenWord = "";
var guessLeft = 15;
var guess = [];

function createNewWord() {
    //create an instance for new letter
    l = new letter();
    currentWordLetter = l.getLetter();
    //show hidden word to be guessed
    hiddenWord = l.getHiddenWord();
    console.log(hiddenWord);
    currentWord = currentWordLetter.join("");
    guessLeft = 15;
    guess = [];
}



function game() {
    if (guessLeft == 0) {
        inquirer.prompt({
            type: "confirm",
            message: "No guesses left. Do you want to end the game?",
            name: "confirm",
            default: true
        }).then(function (response) {
            if (response.confirm) {
                console.log("Game ended.");
            } else {
                createNewWord();
                game();
            }
        })
    }
    // createNewWord();
    else {
        inquirer.prompt({
            type: "input",
            message: "Guess a Letter!",
            name: "userGuess"
        }).then(function (response) {
            // console.log(response);
            if(response.userGuess.length!=1 || !(response.userGuess.charCodeAt(0)>=97 && response.userGuess.charCodeAt(0)<=122)){
                console.log("Invalid input, please type in a letter.");
                game();
            }
            // console.log("guessLeft " + guessLeft);
            else{
                if (guessLeft != 0 && guess.indexOf(response.userGuess) == -1) {
                    var checkIfCorrect = false;
                    for (var k = 0; k < currentWordLetter.length; k++) {
                        if (response.userGuess.toLowerCase() === currentWordLetter[k]) {
                            var splitCurrentWord = hiddenWord.split(" ");
                            // console.log("meh");
                            // console.log(splitCurrentWord);
                            splitCurrentWord[k] = response.userGuess.toLowerCase();
                            hiddenWord = splitCurrentWord.join(" ");
                            // console.log("heng");
                            console.log(hiddenWord);
                            var rightWord = hiddenWord.replace(/ +/g, "");
                            // console.log(rightWord);
                            checkIfCorrect = true;
                        }
    
                    }
                    if (checkIfCorrect == true) {
                        console.log("CORRECT!!!");
                    } else {
                        console.log("INCORRECT!!!");
                    }
    
                    console.log(hiddenWord);
                    guessLeft--;
                    console.log("Guesses remaining: " + guessLeft);
                    guess.push(response.userGuess);
    
                    // console.log(currentWordLetter);
    
                    // hiddenWord = splitCurrentWord.join("");
    
                    if (rightWord === currentWord) {
                        console.log("You got it right! Next Word!");
                        createNewWord();
                    }
                    // console.log("next turn");
    
                    game();
    
                }
    
                else if (guessLeft != 0 && guess.indexOf(response.userGuess) != -1) {
                    console.log("Wrong! You tried this letter before. Try another letter.");
                    game();
                }
            }
        })
    }
}

createNewWord();
game();

