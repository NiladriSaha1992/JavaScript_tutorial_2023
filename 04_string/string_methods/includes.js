/*
  string.includes(text_to_search, start_index) ->
    This method searches a text inside of a string. If found, it returns true, otherwise, it returns false
    It performs a case-sensitive search.
*/

const str = "Hello world, this is string includes method. This method searches a text inside of a string";
// console.log(`Is the word "method" present inside the above string? ${str.includes("method")}`);

// case-sensitivity
// console.log(`Is the word "Method" present inside the above string? ${str.includes("Method")}`);

// write an email verification program
const emails = ["sahaniladri25y@gmail.com", "arnabroy24Atgmail.com", "tistadutta07@gmail.com", "anwesharoy24@gmaildotcom"];
const verifiedEmails = emails.filter((email) => {
  let isVerified = false;
  if(email.includes("@") && email.includes(".")){
    isVerified = true;
  }
  return isVerified;
});

console.log(`Verified email ids are: ${verifiedEmails.join(", ")}`);