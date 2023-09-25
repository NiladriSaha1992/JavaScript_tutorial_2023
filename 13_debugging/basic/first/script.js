/*
const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Maximum temperature is ${max}*celcius`);
  console.log(`Minimum temperature is ${min}*celcius`);
  // calculating difference of temperature between max and min temperatures
  return max - min;
};

console.log(calcTempAmplitude([3, 5, 1], [9, 5, 4]));
*/

function spinWords(string) {
  //TODO Have fun :)
  const wordArr = string.split(' ');
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length >= 5) {
      wordArr[i] = wordArr[i].split('').reverse().join('');
    }
  }
  return wordArr.join(' ');
}

console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
