/*
 comparison operators are used in logical statements to determine equality or difference between two variables or values.

 JS comparison operators are: 
 1) == (check equal values), 
 2) === (check both equal values and equal data-types), 
 3) != (check values are not equal), 
 4) !== (check either values or data-types are not equal), 
 5) > (check value at the left side is greater than the value at the right side), 
 6) < (check value at the left side is smaller than the value at the right side), 
 7) >= (check value at the left side is greater than or equal to the value at the right side), 
 8) <= (check value at the left side is smaller than or equal to the value at the right side)
*/

// example 1
/*
const num1 = 42;
const num2 = "42";
console.log(num1 == num2);
console.log(num1 === num2);
*/

// example 2
/*
let findAge = Number(prompt("Enter your age: "));
console.log(findAge);
if (isNaN(findAge) == true) {
  findAge = Number(prompt("Please enter a valid age: "));
}
if (findAge >= 18) {
  console.log("you can ride on this rider!");
} else {
  console.log(
    `please wait for ${18 - findAge} more years to ride on this rider!`
  );
}
*/

// example 3
let num1 = Number(prompt("Enter first number: "));
if (isNaN(num1) == true) {
  num1 = Number(prompt("Please enter a valid first number: "));
}
let num2 = Number(prompt("Enter second number: "));
if (isNaN(num2) == true) {
  num2 = Number(prompt("Please enter a valid second number: "));
}
if (num1 !== num2) {
  console.log(
    `(${typeof num1})${num1} is different from (${typeof num2})${num2}`
  );
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  }
  if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
  }
} else {
  console.log(`${num1} is identical to ${num2}`);
}
