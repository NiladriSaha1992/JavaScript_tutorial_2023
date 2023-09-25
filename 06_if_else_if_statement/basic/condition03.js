/*
 Create a "Day routine" program
*/

const date = new Date();
const hour = date.getHours();
let routine = "";

if (hour >= 24) {
  routine += "Good mid-night 😴";
} else if (hour > 6 && hour <= 11) {
  routine += "Good morning 🌄";
} else if (hour > 11 && hour <= 15) {
  routine += "Good noon 🍜";
} else if (hour > 15 && hour <= 18) {
  routine += "Good afternoon 🏏";
} else if (hour > 18 && hour <= 21) {
  routine += "Good evening 🌆";
} else if (hour > 21 && hour < 24) {
  routine += "Good night 🌃";
} else {
  routine += "Invalid time";
}

console.log(routine);
