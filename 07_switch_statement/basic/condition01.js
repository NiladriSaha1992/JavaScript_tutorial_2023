const receipe = prompt("Enter a receipe: ").toLowerCase();
const itemsRequired = [];
switch (receipe) {
  case "biriyani":
    itemsRequired.push(
      "Basmati Rice",
      "Biriyani Masala",
      "Rose Water",
      "Keora Water",
      "Meetha Aatar",
      "Mutton or Chicken",
      "Onion",
      "Ginger",
      "Garlic",
      "Mustered Oil"
    );
    break;
  case "fried rice":
    itemsRequired.push(
      "Dehradun Rice",
      "Ghee",
      "Vegetables",
      "Soyabean oil",
      "Garam Masala",
      "Saahi Jeera",
      "Pron or chicken",
      "Rose water"
    );
    break;
  case "chilli chicken":
    itemsRequired.push(
      "Bone-less chicken",
      "Besan",
      "Mustered oil",
      "Onion",
      "Capsicum",
      "Green chillies",
      "Lemon",
      "Tomato Ketchup",
      "Chilli Sauce",
      "Black peeper",
      "Onion leaf"
    );
    break;
  case "chowmine":
    itemsRequired.push(
      "Noodles",
      "Soyabean oil",
      "Vegetables",
      "Ginger",
      "Garlic",
      "Chowmine masala",
      "Tomato Ketchup",
      "Chilli Sauce",
      "Chicken in small pieces"
    );
    break;
  default:
    itemsRequired.push("receipe not available for this item!");
}

console.log(
  `Items required to produce ${receipe}:\n${itemsRequired.join(", ")}`
);
