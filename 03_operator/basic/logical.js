/* 
  Logical operators are :
  1) &&  (logical AND) (short-circuit operator) -  This operator evaluates boolean operands and returns the value of the falsy operand or the last operand value if all the operands become truthy. It tries to convert value of any operand to a boolean value and then evaluates that value.
  2) ||  (logical OR) -  This operator evaluates both boolean operands and any other values and returns the value of the truthy operand. It tries to convert value of any operand to a boolean value and then evaluates that value. It performs evaluation of operands from left to right. If it finds any truthy value, it stops execution and returns the truthy value.
  
*/

/* ----- Logical AND ----- */
let age = 31;
let hasGoodVision = false;
console.log(age >= 18 && hasGoodVision === true);

// the following will return the falsy value
let walletbalance = undefined;
let bankBalance = 20000;
console.log(walletbalance && bankBalance);

// the following will return the falsy value
const name = "";
const email = null;
const phone = "8981584700";
console.log(name && email && phone);
console.log(phone && email && name);

// some more examples
console.log("" && undefined); // will log ""
console.log(false && "has value"); // will log false
console.log("has value" && false); // will log false
console.log("Partner 1" && null && "partner 3"); // will log null
console.log(false && 0); // will log false
console.log(29 && 12 && 0 && 10 && 14); //  will log 0
console.log("Niladri" && "Arnab" && "Sujit" && null && "Manas" && null && "Abhisek");

/* ----- Logical OR ----- */
console.log(0 || null || 32 || 45 || false || 21);
console.log(Boolean(undefined) || Boolean(null) || Boolean(32));