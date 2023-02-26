const prompt = require("prompt-sync")();

function dogFoodCalculator(dogFoodWeight, dogConsumption) {
    let duration = (dogFoodWeight * 1000) / dogConsumption;
    let leftover = (dogFoodWeight * 1000) % dogConsumption;

    if (!Number.isInteger(duration)) {
        duration = duration.toFixed(0);
    };

    console.log(`\n| • The dog food will last for ${duration} days.`);
    console.log(`| • There will be ${leftover}g left over.\n`);
};

let dogFoodWeight = prompt("Enter the dog food weight (kg): ");
let dogConsumption = prompt("Enter the dog consumption (g): ");
dogFoodCalculator(dogFoodWeight, dogConsumption);