"use strict";
/*
// find factorial of a number
function findFactorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

let noOfTimes = parseInt(
  prompt("Factorial of how many numbers do you want to check? ")
);
while (noOfTimes > 0) {
  const getNum = parseInt(prompt("Enter the number: "));
  console.log(`factorial of ${getNum} is : ${findFactorial(getNum)}`);

  noOfTimes--;
}
*/
/*
// simple calculator
function add(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  const n3 = n1;
  if (n1 < n2) {
    n1 = n2;
    n2 = n3;
  }
  return n1 - n2;
}
function mul(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}

const option = parseInt(
  prompt(
    "Select an option:\npress 1 for addition\npress 2 for subtraction\npress 3 for multiplication\npress 4 for division"
  )
);
const n1 = Number(prompt("Enter first number: "));
const n2 = Number(prompt("Enter second number: "));
switch (option) {
  case 1:
    console.log(`Addition of ${n1} and ${n2} is : ${add(n1, n2)}`);
    break;
  case 2:
    console.log(`Subtraction of ${n1} and ${n2} is : ${sub(n1, n2)}`);
    break;
  case 3:
    console.log(`Multiplication of ${n1} and ${n2} is : ${mul(n1, n2)}`);
    break;
  case 4:
    console.log(`Division of ${n1} and ${n2} is : ${div(n1, n2)}`);
    break;
  default:
    console.log(`*Invalid entry(s)!`);
}
*/

// Javascript doesn't check the number of parameters or the data type of the parameters passed into a function

// arguments of different data types
function dispProfile(name, age, gender, qlf, address, voterRight) {
  return `Name: ${name}\nAge: ${age}\nGender: ${gender}\nQualification: ${qlf}\nAddress: ${address}\nHas voter right: ${voterRight}`;
}

// console.log(
//   dispProfile("Niladri Saha", 31, "Male", "B.COM(Hons.)", "Liluah", true)
// );

// less arguments passed than required (for missing argument Javascript will set undefined)
function findAvg(n1, n2, n3) {
  let res = (n1 + n2 + n3) / 3;
  return `The average is: ${res}`;
}

// console.log(findAvg(10, 22));
console.log(findAvg(10, 22, 37));
