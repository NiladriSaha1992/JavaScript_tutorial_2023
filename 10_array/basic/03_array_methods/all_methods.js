/*
const para = document.querySelector(".result");

const creditors = ["M/S. Gupta Cloth Store", "M/S. Ismail Net Workshop", "M/S. Indian Silk House", "M/S. Ganesh Textiles", "M/S. Kamal Fabrics"];

const dept = [
  [
    "Accounts",
    [
      ["Suroj Roy", "jr. accountant", "8240520924"],
      ["Avinash Barik", "sr. accountant", "7947624321"],
      ["Lokesh Yadav", "CA", "9836510026"]
    ],
  ],
  [
    "Production",
    [
      ["Abhijit Bhattacharya", "labour manager", "6240812240"],
      ["Harshit Ahuja", "casting manager", "7947374797"],
      ["Palash Pramanik", "material supply manager", "9830305200"]
    ],
  ],
  [
    "Sales",
    [
      ["Ayan Hazra", "marketing manager", "8247921432"],
      ["Avik Bera", "packaging manager", "8747628971"],
      ["Kunal Sen", "distribution manager", "6295873122"]
    ],
  ],
];

// -- array.push() - add elements at the end of an array --
creditors.push("M/S. Nabaniketan Stores");
creditors.push("M/S. Gitanjali Stores");

console.log(creditors);
// data type of array
console.log(typeof creditors);

// -- Array.isArray(array) and array instanceof Array methods --
console.log("Is creditors an array: ", Array.isArray(creditors));
dept.forEach(el => {
  console.log(el[0]);
  el[1].forEach(subel => {
    if (subel instanceof Array) {
      console.log(subel.toString());
    }
  })
})

// -- array.every(call_back_function) method --
// Given an array, write a function to check if all elements of that array are of a specified data type.
const checkDataType = function(arr, dtype) {
  if (Array.isArray(arr)) {
    const isOfSameDataType = arr.every(function(el, indx, ar) {
      return typeof el === dtype;
    }, dtype);
    return `Each element of the array ${isOfSameDataType ? "is" : "is not"} a ${dtype}`;
  } else {
    return "please insert an array as first argument of the checkDataType function expression !";
  }
};

console.log(checkDataType(["Geeks", "for", "Geeks"], "string"));
console.log(checkDataType(["Geeks", 4, "Geeks"], "string"));

// array.unshift() method - add an element at the beginning of an array
const stock = [
  ["Samsung Galaxy M13", 11999],
  ["Motorola Moto G32", 11999],
  ["Redmi 11 Pro", 12999],
  ["Motorola Moto G42", 12999],
  ["Motorola Moto G52", 13999],
  ["Redmi Note 12", 13999],
  ["Samsung Galaxy F23 5G", 16999],
];

const newArrivals = [
  ["Samsung Galaxy M14 5G", 14999],
  ["Motorola Moto G62 5G", 15499],
  ["Motorola Moto G73 5G", 16999],
  ["Motorola Moto G82 5G", 17999],
  ["Samsung Galaxy M34 5G", 16999],
  ["Redmi Note 12 Pro 5G", 17999],
];

newArrivals.forEach(el => stock.unshift(el));
console.log(stock);
*/

// --- array.every(call_back) ---
/*
const products = ["monitor", "keyboard", "mouse", 289.00, "ups", "cabinet", "processor", 10499.00, "ram", "ssd", "wifi router"];

const areAllString = function(arr, datatype){
  return arr.every(function(prod){
    return typeof prod === datatype;
  }, datatype)
};

console.log(areAllString(products, "string"));

// example - 2 (checking whether all names follow a regex pattern or not)
const names = ["Niladri Saha", "Arnab Roy", "Mitin Saha", "Sujit Karmakar", "Bhaskar Majumdar", "Subhankar Das"];
const regexPattern = /^[A-Za-z\s]+$/g;

const checkNames = function(namesArr, regexPattern){
  return namesArr.every(function(name){
    return name.match(regexPattern);
  }, regexPattern);
};

console.log(checkNames(names, regexPattern));
*/

// --- array.push(element) (adds an element at the end of an array and returns the new length of the array)---
/*
// example - 1
const stock = [
  ["Samsung Galaxy M13", 11999],
  ["Motorola Moto G32", 11999],
  ["Redmi 11 Pro", 12999],
  ["Motorola Moto G42", 12999],
  ["Motorola Moto G52", 13999],
  ["Redmi Note 12", 13999],
  ["Samsung Galaxy F23 5G", 16999],
];

const newArrivals1 = [
  ["Samsung Galaxy M14 5G", 14999],
  ["Motorola Moto G62 5G", 15499],
  ["Motorola Moto G73 5G", 16999],
];

const newArrivals2 = [
  ["Motorola Moto G82 5G", 17999],
  ["Samsung Galaxy M34 5G", 16999],
  ["Redmi Note 12 Pro 5G", 17999],
];

for(let arr1 of newArrivals1){
  const newLen = stock.push(arr1);
  console.log("new length of stock array:", newLen);
}

for(let newArr2 of newArrivals2){
  const newLen = stock.push(newArr2);
  console.log("The new length of stock array:", newLen);
}

console.log(stock);


// example - 2
const animals = ["cow", "elephant", "lion", "tiger"];
let count = animals.push("dog", "cat");
console.log(`previous length of animals array: ${count}`);
count = animals.push("pig", "goat", "crocodile");
console.log(`current length of animals array: ${count}`);
*/

/* --- array.unshift(elem1, elem2, ..., elemN) (adds elements at the beginning of an array and returns length of the array)--- */
/*
const animals = ["cow", "elephant", "lion", "tiger"];
let count = animals.unshift("monkey", "snake");
console.log(`previous length of the animals array: ${count}`);
console.log(animals);
count = animals.unshift("lizard", "dear", "goat", "buffello");
console.log(`current length of the animals array: ${count}`);
console.log(animals);
*/

/* --- array.pop() (removes the last element from an array and returns that removed element) --- */
/*
const animals = ["cow", "goat", "elephant", "dear", "tiger", "lion"];
let removedElem = animals.pop();
console.log(`The removed animal is: '${removedElem}'`);
console.log(animals);

removedElem = animals.pop();
console.log(`The current removed animal is: '${removedElem}'`);
console.log(animals);
*/

/* --- array.shift() (removes the first element from an array and returns that removed element) --- */
/*
const animals = ["cow", "goat", "elephant", "dear", "tiger", "lion"];
let removedElem = animals.shift();
console.log(`The previous removed element: ${removedElem}`);
console.log(animals);

removedElem = animals.shift();
console.log(`The current removed element: ${removedElem}`);
console.log(animals);
*/

/* --- array.indexOf(element) (returns the index of the first occurence of the element in the array or -1 if not found) --- */
/*
const mamels = ["cow", "goat", "camel", "giraff", "zebra", "camel", "monkey"];

console.log(`camel found at index ${mamels.indexOf("camel")}`);

console.log(`camel found at index ${mamels.indexOf("camel", 3)} starting from index 3`);

console.log(`Does zebra exist in mamels array? ${mamels.indexOf("zebra") != -1? "yes" : "no"}`);

console.log(`Does donkey exist in mamels array? ${mamels.indexOf("donkey") != -1? "yes" : "no"}`);

// ex - 2
const clients = ["John Doe", "Will Smith", "Nikola Tesla", "Mike Houton", "Dan Daniels", "Nikola Tesla", "Will Smith"];
const getClientName = prompt("Enter name of the client: ");
console.log(`you ${clients.indexOf(getClientName) != -1? "have" : "don't have"} a client with name '${getClientName}'`);
*/

/* --- array.includes(element) (returns true if an element exists in an array or returns false instead) -- */
/*
const clients = ["John Doe", "Will Smith", "Nikola Tesla", "Mike Houton", "Dan Daniels", "Nikola Tesla", "Will Smith"];
console.log(clients.includes("Nikola Tesla"));

const getCliName = prompt("Enter client name: ");
if(clients.includes(getCliName)){
  console.log(`The client '${getCliName}' exists in the client list.`);
}else{
  console.log(`The client '${getCliName}' doesn't exist in the client list.`);
}
*/

/* --- array1.concat(arr2, arr3, arrN) (concates two or more arrays and returns a new array) --- */
/*
const mobiles = ["Samsung Galaxy S23", "Motorola Moto G62", "Motorola Moto G73", "Redmi Note 12 Pro", "Samsung Galaxy M14"];
const newCollection1 = ["Samsung Galaxy M34", "Motorola Moto G82", "Samsung Galaxy F23"];
const newCollection2 = ["Motorola Moto G54", "Motorola Moto Edge 40"];

const allCollections = mobiles.concat(newCollection1, newCollection2);
console.log(allCollections);

// ex - 2
const students = ["Arnab Roy", "Sujit Karmakar", "Oindrila Sengupta"];
const newStu1 = "Tista Dutta";
const newStu2 = ["Madhuja Bhowmick", ["Manas Majhi", "Mitin Saha"]];
const newStu3 = ["Niladri Saha", "Abhisek Chatterjee"];
const allStudents = students.concat(newStu1, newStu2, newStu3);
console.log(allStudents);
*/

/* --- array.entries() (returns an array iterator object that contains a key-value pair for each index of the array) --- */
/*
const mobiles = ["Samsung Galaxy S23", "Motorola Moto G62", "Motorola Moto G73", "Redmi Note 12 Pro", "Samsung Galaxy M14"];
for(let entries of mobiles.entries()){
  console.log(entries);
}

// ex - 2
const product = [1001,"Moto G62","Motorola","Mobiles","Flipkert India Pvt. Ltd.",15499.00
];

for(let [key, value] of product.entries()){
  console.log(`Key: ${key}, value: ${value}`);
}
*/

/* --- array.every(callBackFn) (returns "True" if all the elements of the array passes a test defined in the call-back function, otherwise returns "False") --- */

/*
// check whether length of all elements of an array is greater than 20 or not
const lenGreaterThan20 = (element) => element.length > 20;
const arr = ["Arnab Roy", "Sujit Karmakar", "Oindrila Sengupta", "Tista Dutta", "Madhuja Bhowmick", "Abhisek Chatterjee", "Niladri Saha", "Deep Dasgupta"];
console.log(`Whether length of names of all person greater than 20? ${arr.every(lenGreaterThan20)}`);

// check whether an array is a subset of another array
const isSubSet = function(parent, child){
  return child.every(element => parent.includes(element));
};

const parent1 = [1, 2, 3, 4, 5, 6, 7];
const child1a = [5, 3, 7];
const child1b = [2, 6, 4];
const child1c = [6, 7, 8];
const child1d = [1, 5, 9];

console.log(`is child array 1 a subset of parent array? ${isSubSet(parent1, child1a)}`);
console.log(`is child array 2 a subset of parent array? ${isSubSet(parent1, child1b)}`);
console.log(`is child array 3 a subset of parent array? ${isSubSet(parent1, child1c)}`);
console.log(`is child array 4 a subset of parent array? ${isSubSet(parent1, child1d)}`);

// checking whether all email ids are valid or not
const isValidEmail = function(emailArr){
  const regexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  return emailArr.every(email => email.match(regexPattern));
};

const emails = ["sahaniladri25y@gmail.com", "arnab.roy24@gmail.com", "tista.dutta07@gmail.com", "sahaniladri92@outlook.com", "satindro.bose33AtgmailDotcom"];

console.log("Are all emails valid?", isValidEmail(emails));
*/

/* --- array.filter(callbackFn) (returns an array of those elements of the other array, which passes the test defined in the call back function. It creates a shallow copy of another array) --- */

/*
// find out those persons whose length of name is less than 15 characters
const lenLessThan15 = name => name.length < 15;
const persons = ["Arnab Roy", "Sujit Karmakar", "Oindrila Sengupta", "Tista Dutta", "Madhuja Bhowmick", "Abhisek Chatterjee", "Niladri Saha", "Deep Dasgupta"];

const filteredNames = persons.filter(lenLessThan15);
console.log("Those whose length of name is less than 15 characters:", filteredNames.join(", "));

// find those students whose age is between 18 to 30
const students = [["Niladri Saha", "1992-07-11"], ["Arnab Roy", "1998-08-05"], ["Priyanka Roy Chowdhuri", "1991-12-02"], ["Subhankar Das", "1991-12-18"], ["Tista Dutta", "1996-05-14"], ["Bhaskar Majumdar", "1991-12-20"]];
const getAge = function(birthDate){
  const birthYear = (new Date(birthDate)).getFullYear();
  const curYear = (new Date()).getFullYear();
  return curYear - birthYear;
};
const checkAge = (student) => getAge(student[1]) >= 18 && getAge(student[1]) <= 30;
const selectedStu = students.filter(checkAge);
console.log(selectedStu);
*/

/* --- array.find(callBackFn) (returns that element which first satisfies the call back function) --- */

/*
// return the salary that first crosses a margin of 25000
const salaries = [18500, 20000, 22000, 26800, 28700, 16800, 32000, 21500];
const checkSalary = (salary) => salary > 25000;
const salaryCrossesMargin = salaries.find(checkSalary);
console.log(`Salary that first crosses the margin of 25000: ${salaryCrossesMargin}`);

// ex - 2 (find the date of birth that first crosses the age limit of 30)
const findAge = function(dob){
  const birthYear = (new Date(dob)).getFullYear();
  const currentYear = (new Date()).getFullYear();
  return currentYear - birthYear;
};
const checkAge = (dob) => findAge(dob) >= 30;
const dobs = ["1998-11-05", "1996-08-25", "1993-02-10", "1997-06-12", "1992-07-11", "1991-12-20", "1995-04-08", "1991-12-18"];
console.log(`The date of birth that first crosses the age limit of 30 is '${dobs.find(checkAge)}'`);
*/

/* --- array.findIndex() (returns the index of the element that first satisfies the testing function) --- */

/*
const ages = [5, 25, 18, 19, 22, 31, 26, 23, 28, 12];
// find the index of the first age that exceeds the age limit of 25
const checkingFn = (age) => age > 25;
console.log(`The index of the first age that exceeds 25: ${ages.findIndex(checkingFn)}`);

// find which of the names has the length more than 20 characters
const checkName = (name) => name.length > 20;
const names = ["Niladri Saha", "Tista Dutta", "Anindita Bhattacharya", "Aniket Samanta", "Palash Pramanik", "Madhuja Bhowmick"];
console.log(`The first name that has length of more than 20 characters is at index no. ${names.findIndex(checkName)}`);
*/

/* --- array.flat() (creates a new array with all the elements and sub-elements of an array contenating them together) --- */

/*
const teams = [["Niladri", "Arnab", "Tista"], ["Madhuja", "Dipankar", "Sujit"], ["Mitin", "Manas", "Rajorshi"]];
console.log(teams.flat());
*/

/* --- array.forEach(callbackFn) (executes a function once for each element of an array) --- */

/*
// const checkName = (name, regex) => name.match(regex);
const names = ["Niladri Saha", "Tista Dutta", "Anindita Bhattacharya", "Hriday26@gmail.com", "Aniket Samanta", "Palash Pramanik", "Madhuja Bhowmick", "indranil.karmakar23@gmail.com"];
console.log(names.forEach(function(name){
  const regex = /^[A-Za-z\s]+$/g;
  return name.match(regex);
}));
*/

/* --- array.from(iterable, mapFn, thisArg) (creates a new array from an iterable object, while doing so if a map function is mentioned, each element of the iterable goes through that function) --- */

/*
// remove all other characters instead of letters and white spaces from a string
const str = "Hello world, this is JavaScript tutorial. I'm doing this in 2023, in the month of septembar";
const checkText = function(text) {
  const alpWhiteSpaces = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  const newAlpWhiteSpacesArr = Array.from(alpWhiteSpaces);
  if (newAlpWhiteSpacesArr.includes(text)) {
    // debugger;
    return text;
  }
};
const newArr = Array.from(str, checkText);
console.log(newArr);

// ex - 2 (remove all elements except ",", white spaces, alphabets and numbers from an address)
const address = "48M/13 Rabindra Sarani, Liluah, Howrah, PIN.-711204";
const checkChars = function(char) {
  const charsAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789, ";
  const allowedCharArr = Array.from(charsAllowed);
  if (allowedCharArr.indexOf(char) != -1) {
    return char;
  } else {
    return undefined;
  }
};

const newAddressArr = Array.from(address, checkChars).map(function(elem) {
  if (elem != undefined) {
    return elem;
  }
});
console.log(newAddressArr.join(""));
*/

/* --- Array.isArray(iterable) (returns true if an iterable is an array or returns false) --- */

/*
const products = ["rice", "wheat", "oil", "masalas", "vegtables"];
console.log(Array.isArray(products));
const persons = new Array(5);
persons[0] = "Niladri";
persons[1] = "Arnab";
persons[2] = "Madhuja";
persons[3] = "Tista";
persons[4] = "Subhankar";
if(Array.isArray(persons)){
  for(let i in persons){
    console.log(`person ${(Number(i)+1)}: "${persons[i]}"`);
  }
}
*/

/* --- array.join(seperator) (this method of array instance converts an array to a string where each element will be seperated by a seperator string) --- */

/*
const products = [["rice", 55.00], ["wheat", 42.00], ["sugar", 44.00], ["potato", 20.00], ["onion", 25.00]];
const allProducts = products.flat();
console.log(allProducts.join());
*/

/* --- array.keys() (returns an array that consists keys of elements of another array) --- */

/*
const products = ["rice", "wheat", "oil", "masalas", "vegtables"];
console.log(products.keys());
*/

/* --- array.reduce(callbackFn) */

/*
const nums = [1, 2, 3, 4, 5];
const initialVal = 1;
const mulWithInitial = nums.reduce(
  (prevVal, curVal) => prevVal * curVal,
  initialVal
);
console.log(mulWithInitial);
*/

/* --- array.slice(start, end) (extracts part of an array and returns a new array containing those parts, here, start and end are indexes and end index will not be included) --- */

/*
const employees = [
  "Arnab Roy",
  "Niladri Saha",
  "Tista Dutta",
  "Abhisek Chatterjee",
  "Arnab Das",
  "Mitin Saha",
  "Abhijit Mal",
];
const selectedEmployees = employees.slice(1, 4).concat(employees.slice(5));
// console.log("selected employees for this project:", selectedEmployees.join());

// ex - 2 [write a random password(10 characters) generator program]
function shuffle() {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const strToArr = str.split("");
  const shuffledArr = [];
  while (true) {
    const randIndex = Math.floor(Math.random() * strToArr.length);
    if (shuffledArr.length === strToArr.length) {
      break;
    } else {
      const randValue = strToArr[randIndex];
      if (shuffledArr.includes(randValue)) {
        continue;
      } else {
        shuffledArr.push(randValue);
      }
    }
  }
  return shuffledArr;
}

console.log(`You can use this password: "${shuffle().slice(0, 10).join("")}"`);
*/

/* --- array.some(callBackFn) (returns true if atleast one of the elements of the array satisfies the condition defined in the call-back function, otherwise returns false) --- */

/*
const numbers = [4, 9, 10, 12, 17, 15, 8, 19, 21, 11, 23, 27, 31, 25];

// find if there is atleast one prime digit exists in the numbers array or not
const checkPrime = function (num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
};
const hasAnyPrimeNum = (elem) => checkPrime(elem) != false;
console.log(
  `Has the numbers array any prime number? : ${numbers.some(hasAnyPrimeNum)}`
);
*/

/* --- array.splice(start, no_of_elem, elem1, elem2, ..., elemN) (mutate an array by inserting an element into a particular index of an array or replacing an element of the array with another element) --- */

const products = [
  "Rice",
  "Wheat",
  "Mustered Oil",
  "Salt",
  "Sugar",
  "Jeera",
  "Cheese",
  "Butter",
];
const remElem1 = products.splice(6, 0, "Dhania", "Garam Masala");
console.log("Removed element 1:", remElem1);
console.log(products);

const remElem2 = products.splice(2, 1, "Soyabean Oil");
const remElem3 = products.splice(8, 2, "Butter", "Ghee");
console.log("Removed element 2:", remElem2);
console.log("Removed element 3:", remElem3);
console.log(products);
