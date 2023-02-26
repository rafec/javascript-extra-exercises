const prompt = require("prompt-sync")();

function maxInstallmentsCalculator(total) {
    for (let i = 6; i > 0; i--) {
        let installmentValue = total / i;
        if (installmentValue >= 20) {
            return console.log(`\n| • Max. installments: ${i} of R$${installmentValue.toFixed(2)}\n`);
        };
    };
    console.log("\n| • It' not possible to pay in installments.\n")
};

let total = prompt("Enter the total value: ");
maxInstallmentsCalculator(total);