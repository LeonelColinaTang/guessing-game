// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from "node:process";
const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function randomInRange(min, max){
    let secret = Math.floor(
      Math.random() * (max - min) + min
    )
    return secret;
}

let secretNumber;
let numAttempts = 5;

let checkGuess = num =>{

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

const askGuess = () => {

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

const askRange = function(){
    rl.question('Enter a minimum:\n', min =>{
        rl.question('Enter the maximum, now:\n', max =>{
            console.log(`I'm thinking of a numbwer between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max))
            askGuess()
        })
    })
}

askRange()
// console.log(checkGuess(2))
// console.log(checkGuess(4));
// console.log(checkGuess(7));