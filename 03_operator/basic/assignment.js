const elem = document.querySelector("#elem");
console.log(elem);
let elemVal = parseInt(elem.value);

document.querySelector("#increase").addEventListener("click", function(){
  elemVal += 1;
  elem.value = elemVal;
})

document.querySelector("#decrease").addEventListener("click", function(){
  elemVal -= 1;
  if(elemVal <= 0) elemVal = 0;
  elem.value = elemVal;
})
