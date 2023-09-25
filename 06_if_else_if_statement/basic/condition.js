const date = new Date();
const today = date.getDay();
let day = "";

if (today == 0) {
  day += "Sunday";
} else if (today == 1) {
  day += "Monday";
} else if (today == 2) {
  day += "Tuesday";
} else if (today == 3) {
  day += "Wednessday";
} else if (today == 4) {
  day += "Thursday";
} else if (today == 5) {
  day += "Friday";
} else if (today == 6) {
  day += "Saturday";
} else {
  day += "invalid day";
}

console.log(`Today is ${day}`);
