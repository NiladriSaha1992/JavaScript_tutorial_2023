/*
  string.split(seperator) ->
    This method converts a string into an array. It seperates the string at a seperator. If no seperator is specified, it returns an array with just one element at index 0. If "" is used as seperator, it seperates the string at each character. 
*/

const str = "Hello World!";
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));

const name = "Narayan Chandra Saha";
const nameArr = name.split(" ");
let firstName = middleName = lastName = "";
for(let i = 0; i < nameArr.length; i++){
  switch(i){
    case 0:
      firstName = nameArr[0];
      break;
    case 1:
      middleName = nameArr[1];
      break;
    case 2:
      lastName = nameArr[2];
      break;
  }
}
console.log(`First name: ${firstName}\nMiddle name: ${middleName}\nLast name: ${lastName}`);