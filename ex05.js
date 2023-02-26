const prompt = require("prompt-sync")();

function carPriceCalculator(model, price) {
    console.log(`\nThe entry for ${model} is ${price*0.3}\n`);
    console.log("Installments value:");
    let installmentsPrice = price*0.7;
    for (let i = 0; i < 12; i++){
        console.log(`${i+1} installment - ${(installmentsPrice/12).toFixed(2)}`)
    }
}

let model = prompt("Enter the car model: ")
let price = prompt("Enter the car price: ")
carPriceCalculator(model, price);