"use strict";

let items = [];

for (let i = 0; i <= 3; i++) {
  const itemName = prompt("Enter name of the item: ");
  if (itemName.length > 0) {
    items.push(itemName);
  }
}
console.log(items);
