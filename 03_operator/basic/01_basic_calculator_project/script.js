const num1Elem = document.querySelector("#val1");
const num2Elem = document.querySelector("#val2");
const resultElem = document.querySelector("#result");

const addElem = document.querySelector("#add");
const subtractElem = document.querySelector("#subtract");
const multiplyElem = document.querySelector("#multiply");
const divideElem = document.querySelector("#divide");

addElem.addEventListener("click", function(){
  resultElem.value = Number(num1Elem.value) + Number(num2Elem.value);
})

subtractElem.addEventListener("click", function(){
  resultElem.value = Number(num1Elem.value) - Number(num2Elem.value);
})

multiplyElem.addEventListener("click", function(){
  resultElem.value = Number(num1Elem.value) * Number(num2Elem.value);
})

divideElem.addEventListener("click", function(){
  resultElem.value = Number(num1Elem.value) / Number(num2Elem.value);
})


