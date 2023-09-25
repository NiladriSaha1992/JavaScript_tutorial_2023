/* 
  We can use for-of loop or forEach loop to iterate over array elements
*/

// ----- for-of loop -----
// example - 1
// convert letters into upper case
const letterArr = [..."Hello World!"];
let uprCaseLet = "";
for (let letter of letterArr) {
  uprCaseLet += letter.toUpperCase();
}
console.log(uprCaseLet);

// example - 2
// find letters at odd indices
let letAtOddIndx = "";
for (let [index, letter] of letterArr.entries()) {
  if (index % 2 !== 0) {
    letAtOddIndx += letter;
  }
}
console.log(`Letters at odd indices: ${letAtOddIndx}`);

// ----- forEach loop -----
// example - 1
// find consonants only
let conso = "";
letterArr.forEach((letter) => {
  if (!/[AEIOUaeiou]/.test(letter)) {
    conso += letter;
  }
});
console.log(`Consonants in the above array: ${conso}`);
