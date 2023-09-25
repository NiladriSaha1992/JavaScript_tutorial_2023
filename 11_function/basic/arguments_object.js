/* 
  Arguments object is an array type iterable sequence, used to access the arguments passed into a function.
  It is just an array like object but doesn't have any of the array properties or methods other than length property.
*/

// example - 1
function getFirstLastArgu() {
  return `The first argument is "${arguments[0]}" and the last argument is "${
    arguments[arguments.length - 1]
  }"`;
}

console.log(
  getFirstLastArgu(
    "Niladri",
    "Arnab",
    "Mitin",
    "Abhisek",
    "Bhaskar",
    "Subhankar"
  )
);

// example - 2
function getMaxValue() {
  let maxVal = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxVal) {
      maxVal = arguments[i];
    }
  }
  return `The maximum number among the numbers is: ${maxVal}, and\nthe function that uses arguments is: ${arguments.callee}`;
}

console.log(getMaxValue(43, 29, 56, 17, 19, 71, 59, 63));
