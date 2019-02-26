//generate words to guess
var words = ["pencil", "eraser", "chalkboard", "paper", "homework", "calculator", "ruler", "gluestick"];

//fetch ids
var jWins = document.getElementById("wins");
var jWord = document.getElementById("word");
var jGuessesLeft = document.getElementById("guessesLeft");
var jGuessesDone = document.getElementById("guessesDone");

//number of wins
var wins = 0;
//number of guesses left
var guessesLeft = 13;
jGuessesLeft.textContent = guessesLeft;
//array of letters guessed
var guessesDone = [];
//counter of guesses for function
var guessesMade = 0;

//selects a word from var words array at random
var genWord = words[Math.floor(Math.random() * words.length)];

//loops through the word and splits each letter into an array and
// creates _ for each letter 
var splitGenWord = [];
//array of the underscores
var underscoreWord = [];
//a string of the above array
var stringUnderscoreWord;
//this variable is to check to see if the word equals the genword
var winCheckWord;
for (i = 0; i < genWord.length; i++) {
    splitGenWord.push(genWord.charAt(i));
    underscoreWord.push("_");
    jWord.textContent += underscoreWord[i] + " ";
}

document.onkeyup = function (event) {
    // //gets the key the users presses
    var userGuess = event.key;

    //this if statement makes it so that keys like "Control" aren't displayed
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" ||
        userGuess === "d" || userGuess === "e" || userGuess === "f" ||
        userGuess === "g" || userGuess === "h" || userGuess === "i" ||
        userGuess === "j" || userGuess === "k" || userGuess === "l" ||
        userGuess === "m" || userGuess === "n" || userGuess === "o" ||
        userGuess === "p" || userGuess === "q" || userGuess === "r" ||
        userGuess === "s" || userGuess === "t" || userGuess === "u" ||
        userGuess === "v" || userGuess === "w" || userGuess === "x" ||
        userGuess === "y" || userGuess === "z") {

            //gets the key the users presses
            //var userGuess = event.key;

            //this function adds the pressed key to the array and then displays it onto the page
            //it also updates the two variables
            function pusher() {
                guessesDone.push(userGuess);
                jGuessesDone.textContent += guessesDone[guessesMade] + " ";
                guessesMade++;
                guessesLeft--;
            }

            //this function replaces the underscores with correct guesses
            function replacer() {
                underscoreWord[splitGenWord.indexOf(userGuess)] = userGuess;
                //this is in case the letter occurs more than once in the array
                underscoreWord[splitGenWord.lastIndexOf(userGuess)] = userGuess;
                stringUnderscoreWord = underscoreWord.join(" ");
                winCheckWord = underscoreWord.join("");
                jWord.textContent = stringUnderscoreWord;
                jGuessesLeft.textContent = guessesLeft;                
            }

            //winners everything
            function clear() {
                jWins.textContent = wins;
                guessesLeft = 13;
                guessesDone = [];
                guessesMade = 0;
                genWord = words[Math.floor(Math.random() * words.length)];
                splitGenWord = [];
                underscoreWord = [];
                stringUnderscoreWord;
                jWord.textContent = "";
                jGuessesDone.textContent = "";
                jGuessesLeft.textContent = guessesLeft;
                for (i = 0; i < genWord.length; i++) {
                    splitGenWord.push(genWord.charAt(i));
                    underscoreWord.push("_");
                    jWord.textContent += underscoreWord[i] + " ";
                    
                }

            }
            function winner() {
                wins++
                clear();
            }

            //pardon the long list of repeating code, i can't think of a dry solution
            if (guessesLeft === 13) {
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 12 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 11 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 10 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 9 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 8 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 7 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 6 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 5 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 4 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 3 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 2 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
            if (guessesLeft === 1 && guessesDone.indexOf(userGuess) === -1){
                pusher();
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    if (winCheckWord === genWord) {
                        winner();
                    }   
                }
            }
            if (guessesLeft === 0) {
                clear();
            }
    }
}