/*

// use Number(), String(), Boolean() built-in functions or constructor functions

const getName = prompt("Enter your name: ");
const getBirthYear = Number(prompt("Enter your birth year (yyyy): "));
const hasVoterRight = Boolean(
  prompt("Do you have voter right? (enter yes or leave blank): ")
);
let voterId = "";
if (hasVoterRight) {
  voterId = String(prompt("Enter your voter Id: "));
}
const getLocation = prompt("Enter your location: ");
const getPhone = String(prompt("Enter your phone number: "));

const date = new Date();
const calcAge = String(date.getFullYear() - getBirthYear);

console.log(`Your personal info:
Name: ${getName}
Age: ${calcAge}
Voter Id: ${voterId ? voterId : "N.A."}
Location: ${getLocation}
Phone: ${getPhone}
`);
*/

// use parseInt(), parseFloat() etc. functions to convert a string to integer, floating point nums

const getProdId = parseInt(prompt("Enter product Id: "));
const getProdName = prompt("Enter product name: ");
const getProdPrice = parseFloat(prompt("Enter product price (in rupee): "));
const sellingPrice = getProdPrice * 0.9;

console.log(`Product details:
Product Id: ${getProdId}
Product name: ${getProdName}
Selling price: ${sellingPrice.toFixed(2)}
`);
