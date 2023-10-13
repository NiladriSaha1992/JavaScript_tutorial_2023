/*
  string.trim() ->
    This method removes white spaces from both sides of a string and returns it.
*/

const firstName = "  Niladri  ";
const lastName = "  Saha  ";
const address = "  Liluah, Howrah, 711204  ";
const email = "  sahaniladri25y@gmail.com  ";

console.log(`Full Name: ${firstName} ${lastName}, Length: ${firstName.concat(" ", lastName).length}\nAddress: ${address}, Length: ${address.length}\nEmail Id: ${email}, Length: ${email.length}`);

console.log();

console.log(`Full Name: ${firstName.trim()} ${lastName.trim()}, Length: ${firstName.trim().concat(" ", lastName.trim()).length}\nAddress: ${address.trim()}, Length: ${address.trim().length}\nEmail Id: ${email.trim()}, Length: ${email.trim().length}`);
