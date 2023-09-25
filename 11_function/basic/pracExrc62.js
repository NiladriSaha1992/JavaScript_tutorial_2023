// create a guess my number program
function genRandNum(myNum) {
  if (attempt >= 9) {
    console.log(`Alash! You lose the game !!!`);
    stat = true;
  } else {
    if (myNum > randNum) {
      attempt++;
      console.log("Too high !!!");
      console.log(`Attempt number ${attempt}\n\n`);
    } else if (myNum < randNum) {
      attempt++;
      console.log("Too low !!!");
      console.log(`Attempt number ${attempt}\n\n`);
    } else {
      stat = true;
      console.log(
        `\nCongratulations, you guessed it correctly after ${attempt} attempts !!!`
      );
    }
  }
}

function selectOption() {
  let option = prompt(`do you want to play the game again?(y/n): `);
  switch (option) {
    case "y" || "Y":
      window.location.reload();
      break;
    case "n" || "N":
      console.log("Thank you, visit again !!!");
      return false;
    default:
      console.log("please select a correct option !!!");
      selectOption();
  }
}

let attempt = 0;
let stat = false;
const randNum = Math.floor(Math.random() * 100) + 1;

while (stat != true) {
  console.log("Select a number between 1 and 100");
  const num = parseInt(prompt("Enter your choice: "));
  genRandNum(num);
}
selectOption();

