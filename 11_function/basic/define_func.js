"use strict";

/*
function dispName() {
  return "Niladri Saha";
}

console.log("My name: ");
for (let i = 1; i <= 3; i++) {
  console.log(dispName());
}
console.log("--- End ---");
*/

// ----- function hoisting -----

// ***calling the function before its declaration (It does not work in case of arrow and anonymous functions i.e. it works against function declarations and not against function expressions.)

console.log(`The result of the addition : ${getSum()}`);

function getSum() {
  const n1 = 25;
  const n2 = 75;
  return n1 + n2;
}
