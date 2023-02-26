const prompt = require("prompt-sync")();

function calculator(numA, numB) {
    console.log(`The sum of these numbers is equal to `, numA + numB);
    console.log(`Subtracting these numbers is equal to `, numA - numB);
    console.log(`Multiplying these numbers is equal to `, numA * numB);
    console.log(`Dividing these numbers is equal to `, numA / numB);
    console.log(`The remainder of the division between these numbers is equal to `, numA % numB);
}

let numA = Number(prompt("Enter the first number: "));
let numB = Number(prompt("Enter the second number: "));
calculator(numA, numB);