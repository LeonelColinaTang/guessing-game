// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from "node:process";
const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});


const randomInRange = (min, max) => { //This is the function to create the random number
    let secret = Math.floor(
      Math.random() * (max - min) + min
    )
    return secret;
}

let secretNumber; // the secretNumber 
let numAttempts;// the number of attempts

const checkGuess = num => { //This functions checks if the guess is the secretNumber

    if(num > secretNumber){
        console.log('Too high.');
        return false;
    }else if(num < secretNumber){
        console.log('Too low.');
        return false;
    }else{
        console.log(`Correct!`);
        return true;
    }
}

const askGuess = () => { //Asks for a guess and checks it (checkGuess)
    rl.question("Enter a guess: ", answer =>{

        if(checkGuess(Number(answer))){
            rl.close()
        }else{
            numAttempts--;
            if(numAttempts === 0){
                console.log('You Lose!');
                rl.close();
            }else{
                askGuess()
            }
        }
    })
}

const askRange = () => {//Asks for a range for the secretNum and calls askGuess.
    rl.question('Enter a minimum:\n', min =>{
        rl.question('Enter the maximum, now:\n', max =>{
            console.log(`I'm thinking of a numbwer between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max))
            askGuess();
        })
    })
}

const askLimit = () =>{//Asks for the number of attempts and starts the game
    rl.question('How many attempts do you want to have?: ', num =>{
        numAttempts = num;
        askRange();
    })
}
askLimit() //Starts the game
