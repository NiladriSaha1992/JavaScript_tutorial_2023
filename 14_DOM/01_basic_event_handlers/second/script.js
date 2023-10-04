function changeColor(){
  const redValue = Number(document.getElementById("red").value);
  const greenValue = Number(document.getElementById("green").value);
  const blueValue = Number(document.getElementById("blue").value);
  
  if(!isNaN(redValue) && !isNaN(greenValue) && !isNaN(blueValue)){
    const mainDivSelector = document.getElementById("mainDiv");
    if((redValue >= 0 && redValue <= 255) && (greenValue >= 0 && greenValue <= 255) && (blueValue >= 0 && blueValue <= 255)){
      mainDivSelector.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      mainDivSelector.innerHTML = `<h2>rgb(${redValue}, ${greenValue}, ${blueValue})</h2>`;
    } else{
      alert("*please enter valid red, green, and blue values...");
    }
  }else {
    alert("*please enter valid red, green, and blue values...");
  }
}