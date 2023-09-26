/*
    getting and store user data
*/

const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const aadhar = prompt("Enter your aadhar no.: ");
const address = prompt("enter your address: ");
const phone = prompt("Enter your phone no.: ");
const email = prompt("Enter your email address: ");

console.table({"First name": firstName, "Last name": lastName, "AADHAR": aadhar, "Address": address, "Phone": phone, "Email Id": email});
// console.log(`User details:\nName: ${firstName} ${lastName}\nAADHAR: ${aadhar}\nAddress: ${address}\nPhone: ${phone}`);