// use of different values as default parameters
function getRes(n1, n2, n3 = 30) {
  return `Numbers are:
  Number 1: ${n1}
  Number 2: ${n2}
  Number 3: ${n3}`;
}

// console.log(getRes(5, 10, 20));
// console.log(getRes(5, 10));
// console.log(getRes(5));

function getRes2(n1, n2 = 20, n3) {
  return `Numbers are:
  Number 1: ${n1}
  Number 2: ${n2}
  Number 3: ${n3}`;
}
// console.log(getRes2(5, 10, 30));
// console.log(getRes2(5, 10));
// console.log(getRes2(5));

function getRes3(n1, n2 = 20, n3 = 30) {
  return `Numbers are:
  Number 1: ${n1}
  Number 2: ${n2}
  Number 3: ${n3}`;
}
// console.log(getRes3(10, 40, 60));
// console.log(getRes3(10));
// console.log(getRes3(10, 40));

// use of null and array as default parameters
function getCustomers(c1 = null, c2 = null, c3 = null) {
  return `Customer are:
  1) ${c1}
  2) ${c2}
  3) ${c3}`;
}
// console.log(
//   getCustomers("Amit Mishra", "Ritam Ghosal", "Anirban Bhattacharya")
// );
// console.log(getCustomers("Amit Mishra", "Ritam Ghosal"));
// console.log(getCustomers("Amit Mishra"));

function getRegIregCust(rc = [null, null], ic = [null, null]) {
  const regularCust = rc.join(", ");
  const irregularCust = ic.join(", ");
  return `Our regular customers are: ${regularCust}, and
  Our irregular customers are: ${irregularCust}`;
}

// console.log(
//   getRegIregCust(
//     ["Amit Mishra", "Ritam Ghosal"],
//     ["Anirban Bhattacharya", "Aniket Das", "Biplab Jana"]
//   )
// );

function getPackages(
  p1 = [
    { name: null, price: 0 },
    { name: null, price: 0 },
    { name: "ULT200", price: 899.499 },
  ]
) {
  console.log(`Package 1:
  Name of the package: ${p1[0].name}
  Price of the package(Rs.): ${p1[0].price.toFixed(2)}
  
  `);
  console.log(`Package 2:
  Name of the package: ${p1[1].name}
  Price of the package(Rs.): ${p1[1].price.toFixed(2)}
  
  `);
  console.log(`Package 3:
  Name of the package: ${p1[2].name}
  Price of the package(Rs.): ${p1[2].price}
  
  `);
}
getPackages([
  { name: "ULT60", price: 571.2 },
  { name: "ULT100", price: 699.5 },
]);
