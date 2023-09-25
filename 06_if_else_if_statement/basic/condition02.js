/*
calculate your income tax using conditional statements

*/
const gti = parseInt(prompt("Enter your Gross Total Income (GTI): "));
let tax = 0;

if (gti <= 250000) {
  tax = 0;
} else if (gti > 250000 && gti <= 500000) {
  tax = ((gti - 250000) * 5) / 100;
} else if (gti > 500000 && gti <= 750000) {
  tax = ((gti - 500000) * 10) / 100 + 12500;
} else if (gti > 750000 && gti <= 1000000) {
  tax = ((gti - 750000) * 15) / 100 + 37500;
} else if (gti > 1000000 && gti <= 1250000) {
  tax = ((gti - 1000000) * 20) / 100 + 75000;
} else if (gti > 1250000 && gti <= 1500000) {
  tax = ((gti - 1250000) * 25) / 100 + 125000;
} else {
  tax = ((gti - 1500000) * 30) / 100 + 187500;
}

console.log(`You have to pay an income tax of Rs.${tax} only`);
