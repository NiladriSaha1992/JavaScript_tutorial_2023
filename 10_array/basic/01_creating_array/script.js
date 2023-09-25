const items = [
  "18.5inch led AOC monitor",
  "21.5inch led Dell monitor",
  "19inch lcd lenovo monitor",
  "22inch lcd Benq monitor",
];
// console.log(items, typeof items);

// example - 2 (difference between "new Array()" and "[]" array declaration)
const zipCodes = [711203, 711204, 712012, 713013, 700075];
const zipCodes2 = new Array(711203, 711204, 712012, 713013, 700075);

// console.log(zipCodes);
// console.log(zipCodes2);

// example - 3 (single value array)
const num = [5];
const num2 = new Array(5);

// console.log(num);
// console.log(num2);

num2[0] = 3;
num2[1] = 5;
// console.log(num2);

const arr = ["This is a text", 30, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

arr[1] = [26, 32];
console.log(typeof arr[1]);

arr = ["This is wrong string", 32, false];
console.log(arr);
