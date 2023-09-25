/*
const firstName = 'Niladri';
const lastName = 'Saha';
const address =
  '48M/13 Rabindra Sarani,\nP.O. - Liluah\nDist. - Howrah,\nPIN - 711204';
const emailId = 'sahaniladri25y@gmail.com';

console.log(
  `Full Name: ${firstName} ${lastName}\nAddress: ${address}\nEmail Id: ${emailId}`
);
console.log(
  `There are ${address.length} characters(including spaces) in the above address.`
);
*/

// write a program where you will accept comment from user and print it only if it has atmost 120 characters, otherwise display an error message
const email = prompt('Enter your email address:');
const comment = prompt('Enter your comment here:');

console.log(
  `Hey user "${email}", ${
    comment.length <= 120
      ? 'you have typed the following comment:\n' + comment
      : 'please limit the size of your comment within 120 characters!'
  }`
);
