/*
  string.substr(start, length) ->
    Extracts part of a string and returns it in the form of a new string. "start" is the index from where to start extracting and length is the number of characters to extract.
*/

const str = "abcdefghijklmnopqrstuvwxyz0123456789@#$&";
let shuffledStr = "";
for(let i = 0; i < str.length; i++){
  const randNum = Math.floor(Math.random() * str.length);
  shuffledStr += str[randNum];
}
console.log("The random password is:", shuffledStr.substr(0, 10));

console.log("Another random password is:", shuffledStr.substr(-10));