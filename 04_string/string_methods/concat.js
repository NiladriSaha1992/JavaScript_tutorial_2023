/*
  string.concat(str1, str2, ..., strN) ->
    This string method concats two or more strings and returns a new string.
*/

const firstName = "Niladri";
const lastName = "Saha";
const address = "Liluah, Howrah, 711204";
const email = "sahaniladri25y@gmail.com";

const newStr = "Full Name: ".concat(firstName.concat(" ", lastName, "\nAddress: ", address, "\nEmail Id: ", email));
console.log(newStr);