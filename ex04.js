const prompt = require("prompt-sync")();
const downtown = {name: "Downtown", shippingPrice: 5};
const germanMountain  = {name: "German Mountain", shippingPrice: 7};
const drySquare = {name: "Dry Square", shippingPrice: 4};
const bigField = {name: "Big Field", shippingPrice: 8};

const districts = [downtown, germanMountain, drySquare, bigField];

function shippingPriceCalc(districtName){
    let resultedDistrict = districts.find(district => district.name == districtName);
    return console.log(`\n| • The shipping price for ${resultedDistrict.name} is U$${resultedDistrict.shippingPrice}\n`);
};

function draw() {
    console.log("\n*¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨*");
    console.log("                 Districts");
    console.log("|________________________________________|\n");
    districts.forEach(district => console.log(`| • ${district.name}`));
    console.log("\n")
}

draw();
let districtName = prompt("Enter the district name: ");
shippingPriceCalc(districtName);