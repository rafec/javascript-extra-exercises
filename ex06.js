const prompt = require("prompt-sync")();

function totalValueCalculator(members, totalFish) {
    let fishPrice = 0;
    let membersPrice = members*20;
    if (totalFish > members) {
        fishPrice = (totalFish - members) * 12;
    }
    console.log(`\nNumber of visitants: ${members} - R$${membersPrice.toFixed(2)}`);
    console.log(`Number of fish: ${totalFish} - R$${fishPrice.toFixed(2)}`);
    console.log("-----------------------------------------");
    console.log(`Total value: R$${(membersPrice+fishPrice).toFixed(2)}\n`);
};

let members = prompt("Enter the number of visitants: ");
let totalFish = prompt("Enter the number of fish: ");
totalValueCalculator(members, totalFish);