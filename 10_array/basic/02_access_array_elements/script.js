const students = [
  "Niladri",
  "Arnab",
  "Manas",
  "Mitin",
  "Madhuja",
  "Rajorshi",
  "Tista",
];

// accessing array elements
// access odd indexed students from the above array
console.log(students[1], students[3], students[5], students[7]);

// accessing student at a negetive index
console.log(students[-3], students[-8]);

// replacing a value at a particular index of the above array
students[3] = "Sujit";
students[5] = "Abhisek";

// console.log(students);

// assigning a value to an index that doesn't exist

// students[-1] = "Sayan";
students[8] = "Palash";

// console.log(students[-1]);
// console.log(students[7]);
console.log(students);
students[7] = "Sayan";
console.log(students);
