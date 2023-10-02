function generateRandomPassword(){
  const elem = document.getElementById("randPsw");
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&";
  const pswArr = [];
  while(pswArr.length < 10){
    const randNum = Math.floor(Math.random() * str.length);
    pswArr.push(str[randNum]);
  }
  elem.value = pswArr.join("");
}