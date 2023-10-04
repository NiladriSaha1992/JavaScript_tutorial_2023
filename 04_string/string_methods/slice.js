/*
  string.slice(start, end) ->
    extracts part of a string and returns it. "start" is the index from where to start extracting and "end" is the index (not included) upto where to extract 
*/

const name = "Narayan Chandra Saha";
console.log("First name is:", name.slice(0, 7));
console.log("Middle name is:", name.slice(8, 15));
console.log("Last name is:", name.slice(-4));

// find the domain part of an url
const url = "https://www.example.com/home";
console.log("The domain part of the above url:", url.slice(8, -5));
console.log("The page opened:", url.slice(url.lastIndexOf("/") + 1));