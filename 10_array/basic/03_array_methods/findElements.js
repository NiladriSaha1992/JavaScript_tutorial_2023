/* 
  find() - this method takes a function as its argument, and call that function for each element of an array to match or verify them. 
  indexOf() - this method searches an array for an element and if found, it returns the index of that element in that array and if not found, it returns -1.
*/

const animals = [
  "dog",
  "horse",
  "cat",
  "platypus",
  "dog",
  "horse",
  "zebra",
  "cat",
];

// array.find(function(e){})
let getMyAnimal = animals.find((e) => e === "cat");
console.log(getMyAnimal);

getMyAnimal = animals.find(function (e) {
  return e === "giraff";
});
console.log(getMyAnimal);

// array.indexOf(element)
let myAnimal = "horse";

getMyAnimal = animals.indexOf(myAnimal);
console.log(getMyAnimal);

myAnimal = "tiger";
getMyAnimal = animals.indexOf(myAnimal);
console.log(getMyAnimal);

// array.lastIndexOf(element)
let myAnimalAtLast = animals.lastIndexOf("cat");
console.log(myAnimalAtLast);

myAnimalAtLast = animals.lastIndexOf("lion");
console.log(myAnimalAtLast);
