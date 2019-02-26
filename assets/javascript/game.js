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
//this variable is used later to check to see if the word equals the genword
var winCheckWord;

//turns the letters of the random word into underscores
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
        //for the letters already guessed, it also updates the two variables
        function pusher() {
            guessesDone.push(userGuess);
            jGuessesDone.textContent += guessesDone[guessesMade] + " ";
            guessesMade++;
            guessesLeft--;
        }

        //this function replaces the underscores with correct guesses
        function replacer() {
            underscoreWord[splitGenWord.indexOf(userGuess)] = userGuess;
            //this line of code below is in case the letter occurs more than once in the array
            //this will not work if there are more than two of the same letter in a word
            underscoreWord[splitGenWord.lastIndexOf(userGuess)] = userGuess;
            stringUnderscoreWord = underscoreWord.join(" ");
            winCheckWord = underscoreWord.join("");
            jWord.textContent = stringUnderscoreWord;
            jGuessesLeft.textContent = guessesLeft;
        }

        //clears everything back to the starting values
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

        //a clear but adds a win
        function winner() {
            wins++
            clear();
        }


        //all the code below goes through each keypress and examines what should happen
        //depending on what key is pressed
        if (guessesLeft === 13) {
            pusher();
            if (guessesDone.indexOf(userGuess) != -1) {
                replacer();
                if (winCheckWord === genWord) {
                    winner();
                }
            }
        }
        for (k = 12; k > 0; k--) {
            //if guessesLeft === 12,11,10, etc AND if the guess hasn't been made already
            if (guessesLeft === k && guessesDone.indexOf(userGuess) === -1) {
                pusher();
                //if the guess is made
                if (guessesDone.indexOf(userGuess) != -1) {
                    replacer();
                    //if the word is fully guessed
                    if (winCheckWord === genWord) {
                        winner();
                    }
                }
            }
        }
        //clear if out of guesses
        if (guessesLeft === 0) {
            clear();
        }
    }
}