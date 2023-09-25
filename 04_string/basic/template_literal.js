const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");
const dob = prompt("Enter your date-of-birth (yyyy-mm-dd): ");

const date = new Date();
const curYear = date.getFullYear();

const bdate = new Date(dob);
const birthYear = bdate.getFullYear();

console.log(
  `Hello ${firstName} ${lastName}, you current age is ${
    curYear - birthYear
  } years and you'r ${curYear - birthYear >= 18 ? `elder` : `younger`}`
);
