// constants
const PI = 3.1415;

/*
    --- calculate volume of a cylinder ---
*/
// variables
let radius = 4;
let height = 9;

const cylinderVolume = PI * radius ** 2 * height;
console.log(`Volume of the cylinder is ${cylinderVolume.toFixed(2)} cube cm.`);

/*
    --- calculate slant-area of a cone where the radius of it is 5cm. and height is 12cm. --- 
*/
radius = 5;
height = 12;
const l = Math.sqrt(radius ** 2 + height ** 2);
const slantArea = PI * radius ** 2 * l;
console.log(`Slant-area of the cone is ${slantArea.toFixed(2)} square cm.`);