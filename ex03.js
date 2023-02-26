const prompt = require("prompt-sync")();

function validateAge(age) {
    if (age >= 16) {
        console.log("You CAN buy this game!");
    } else {
        console.log("You CAN NOT buy this game!");
    }
}

let age = prompt("Enter your age: ");
validateAge(age);