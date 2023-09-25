/* 
  "for" loop is used when we want a code to run a specific number of times, i.e. number of iteration is specified.
*/

/*
// example - 1
for (let i = 1; i <= 10; i++) {
  console.log(`The current value is: ${i}`);
}
*/

/*
// example - 2, find odd numbers between 1 and 100
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
*/

/*
// example - 3, find even numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/

/*
// example - 4, find prime numbers between 1 and 100
let primeNumbers = "";
for (let i = 1; i <= 100; i++) {
  if (i !== 1) {
    if (i === 2) {
      primeNumbers += i + ", ";
    } else {
      let prime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          prime = false;
          break;
        }
      }
      if (prime !== false) {
        primeNumbers += i + ", ";
      }
    }
  }
}

console.log(`Prime numbers between 1 and 100 are : ${primeNumbers}`);
*/

/*
// ommiting the initialization
let i = 0;
for (; i < 10; i++) {
  console.log(`The current value is : ${i}`);
}
*/

// ommitting the initialization and condition
let i = 0;
for (; ; i++) {
  if (i === 10) {
    break;
  } else {
    console.log(`The current value is : ${i}`);
  }
}
