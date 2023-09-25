/* 
  string.slice(start, end)
  -------------------------
  Slices out a portion of a string and returns a new string with that slice.
  *** start is the index from where to start slicing and end is the index upto where to slice, but end index will not be included.
*/

/*
const name = 'Narayan Chandra Saha';
const firstName = name.slice(0, 7);
const middleName = name.slice(8, 15);
const lastName = name.slice(16);

console.log(
  `First name: ${firstName}\nMiddle name: ${middleName}\nLast name: ${lastName}`
);

// slice count starting from end
const emailId = 'sahaniladri25y@gmail.com';
const domain = emailId.slice(-9);
console.log(`Domain for the email id is: ${domain}`);

// slice out the protocol part of an url link
const url = 'https://www.example.com/admin';
const protocolPart = url.slice(0, 8);
console.log(`The protocol part of the above url is "${protocolPart}"`);

// slice out the domain part from an email id
const emailAddress = 'arnabroy25@gmail.com';
const domainPart = emailAddress.slice(-9, -4);
console.log(`The domain part of the email address: ${domainPart}`);
*/

/*
  string.substr(start, length)
  -----------------------------
  Slices out part of a string and returns a new string with that part.
  *** start is the index from where to start slicing, end is not used here as that in slice method, instead it takes the length of the portion of the string we want to slice out as the second parameter.
*/

/*
// find the domain part of an url link
const url = 'https://www.example.com/admin';
console.log(`The domain part is: ${url.substr(8)}`);

// write a random password generator program
const randomPassword = function () {
  let str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&';
  const strArr = str.split('');
  const shuffledArr = [];
  while (shuffledArr.length < strArr.length) {
    const randIndex = Math.floor(Math.random() * strArr.length);
    const randValue = strArr[randIndex];
    if (shuffledArr.includes(randValue)) {
      continue;
    } else {
      shuffledArr.push(randValue);
    }
  }
  str = shuffledArr.join('');
  return str.substr(0, 12);
};

console.log(`You can choose this password: ${randomPassword()}`);

// if the number of characters of a comment exceeds 120, then extract characters upto 120 from it.
const comment =
  'Slices out part of a string and returns a new string with that part.*** start is the index from where to start slicing, end is not used here as that in slice method, instead it takes the length of the portion of the string we want to slice out as the second parameter.';
let extractedComment = '';
if (comment.length > 120) {
  extractedComment += comment.substr(0, 120);
} else {
  extractedComment += comment;
}
console.log(`The extracted comment is:\n${extractedComment}`);
*/

/*
  string.replace(text_to_replace, replacing_text)
  ------------------------------------------------
  This string method replaces a text within a string with another text. It doesn't change the original string, rather returns a new string with replaced texts.
  It replace only the first occurrence of the text. To replace all occurrences, use regular expression with /g flag.
  This method performs a case-sensitive search.
  To perform a case-insensitive search, use regular expression with /i flag.
*/

/*
const text =
  "I'm learning JavaScript from geeksforgeeks' official website. geeksforgeeks is a website for tech geeks. Everyone should visit the geeksforgeeks' official website";

// only the first occurrence of geeksforgeeks will be replaced
const newText = text.replace('geeksforgeeks', 'W3Schools');
console.log('The modified text is:\n' + newText);

// here we are going to perform a global replacement
const newTextGlobal = text.replace(/geeksforgeeks/g, 'W3Schools');
console.log('The globally modified text is:\n' + newTextGlobal);

// here we are going to perform a case-insensitive global search
const newTextCaseInsensitive = text.replace(/GEEKSFORGEEKS/gi, 'W3Schools');
console.log(
  'The case-insensitive, globally modified text is:\n',
  newTextCaseInsensitive
);

const text2 =
  'Java is a high level, general purpose, object oriented scripting language used to develop both front end as well as back end applications. Java was developed by Brandon Eich in the year 1995, java was standardised in the year 1997 and was published as ECMAScript from then. The ES6 version of java was introduced in the year 2015';

// replace Java with JavaScript with global and case insensitive search
const newText2 = text2.replace(/Java/gi, 'JavaScript');
console.log(`The modified text2 is:\n${newText2}`);
*/

/*
  string.replaceAll(text_to_replace, text_to_replace_with)
  ---------------------------------------------------------
  replace all occurrences of a text in a string with another text. If we need to use regular expression, we have to use /g flag, otherwise typeError will be thrown.
*/

/*
const text =
  "I'm learning JavaScript from geeksforgeeks' official website. geeksforgeeks is a website for tech geeks. Everyone should visit the geeksforgeeks' official website";
const newText = text.replaceAll('geeksforgeeks', 'w3schools');
console.log(`The replaced text is:\n${newText}`);

// using regular expression with /g flag
const text2 =
  'Java is a high level, general purpose, object oriented scripting language used to develop both front end as well as back end applications. Java was developed by Brandon Eich in the year 1995, java was standardised in the year 1997 and was published as ECMAScript from then. The ES6 version of java was introduced in the year 2015';
const newText2a = text2.replaceAll(/Java/g, 'JavaScript'); // will perform case-insensitive search
console.log(`The replaced text2 is:\n${newText2a}`);
const newText2b = text2.replaceAll(/Java/gi, 'JavaScript');
console.log(`The replaced text2 is:\n${newText2b}`);
*/

/*
  string.toUpperCase()
  ---------------------
  Converts all the characters of a string to uppercase
*/

/*
const first_name = prompt('Enter your first name: ');
const last_name = prompt('Enter your last name: ');

console.log(
  `Your full name:\n${first_name.toUpperCase()} ${last_name.toUpperCase()}`
);
*/

/*
  string.toLowerCase()
  ---------------------
  Converts all the characters of a string to lowercase
*/

/*
const loginEmail = 'sahaniladri25y@gmail.com';
const loginPsw = 'Niladri123';

const emailId = prompt('Enter your email address: ').trim().toLowerCase();
const psw = prompt('Enter your password: ').trim();

if (emailId === loginEmail && psw === loginPsw) {
  console.log("you're successfully logged in!!!");
} else {
  console.log('sorry, either email id or password is wrong!!!');
}
*/

/*
  string.concat(str1, str2, ..., strN)
  -------------------------------------
  Concats two or more string and returns a new string
*/

/*
const greet = 'Welcome Mr.';
const firstName = 'Niladri';
const lastName = 'Saha';
const subject = 'JavaScript';
console.log(
  greet.concat(firstName, ' ', lastName, ', welcome to the world of ', subject)
);

const text1 = 'Hello world! ';
const text2 = 'this tutorial is about JavaScript string methods, ';
const text3 =
  'the string.concat() method concats two or more strings and returns a new string.';
console.log(text1.concat(text2, text3));
*/

/*
  string.trim()
  --------------
  Removes white spaces from both sides of a string
*/

/*
const str = '   Hello world! this is JavaScript Trim String method   ';
console.log(str);
const trimmedStr = str.trim();
console.log(trimmedStr);

// ex-2 (this method is mainly used while accepting data from user and stores them into database)
const firstName = prompt('Enter your first name: ').trim();
const lastName = prompt('Enter your last name: ').trim();
const dob = prompt('Enter your date of birth (yyyy-mm-dd): ').trim();
const aadhar = parseInt(prompt('Enter your aadhar number: ').trim());
const address = prompt('Enter your address: ').trim();
const phone = prompt('Enter your phone number: ').trim();

const findAge = function (dob) {
  const curYr = new Date().getFullYear();
  const dobYr = new Date(dob).getFullYear();
  if (dobYr >= curYr) {
    return 0;
  } else {
    return curYr - dobYr;
  }
};

console.log(`Name: ${firstName} ${lastName}
Age: ${findAge(dob)}
AADHAR: ${aadhar}
Address: ${address}
Phone No.: ${phone}`);
*/

/*
  string.charAt(index)
  ---------------------
  This method takes an index and returns the character at that position of a string.
  If the index is not present, it returns an empty string.
*/

/*
const str = 'Hello World, welcome to JavaScript string method';
const charAt6 = str.charAt(6);
// console.log(`Character at 6th index: ${charAt6}`);

// or, we can use property access operator i.e. [] to access property of a string
// console.log(`Character at 0th index: ${str[0]}`);

const fullName = 'Narayan Chandra Saha';
const findChar = parseInt(prompt('Enter an index number: '));
console.log(
  `The character at ${findChar} index of the full name string is: ${fullName.charAt(
    findChar
  )}`
);
*/

/*
  string.split(seperator)
  ------------------------
  This method converts a string to an array. It seperates the string at a seperator (can be comma, white space or any other character) and creates an array with the seperated characters.
  If no seperator is used, this method creates an array with the whole string hold at its 0th index.
  If "" (empty string) is used as seperator, it creates an array with each character in the string.
*/

/*
const str = 'Niladri, Arnab, Abhisek, Sujit, Mitin, Bhaskar, Subhankar';
const strArr = str.split(', ');
console.log(strArr);

// find those words from a string that starts with a vowel and create an array with them
const demoStr =
  'This method converts a string to an array . It seperates the string at a seperator which can be a comma , a white space or any other character and creates an array with the seperated characters .';
const demoArr = demoStr.split(' ');
const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
const wordWithVowel = demoArr.filter(function (elem) {
  if (vowels.includes(elem.charAt(0))) {
    return elem;
  }
});
console.log(
  `Words with first character as vowel:\n${wordWithVowel.join(', ')}`
);
*/

/*
  string.indexOf(text_to_search, start_from)
  -------------------------------
  This method returns the index position where the specified text is first found in a string. If the text is not found, it returns -1.
*/

/*
const str =
  'Hello world, this is JavaScript tutorial, and now we are learning JavaScript string methods';

// const pos = str.indexOf('JavaScript');
// const pos = str.indexOf('JavaScript', 22);
// const pos = str.indexOf('JavaScript', 67);
const pos = str.indexOf('TypeScript');
console.log(pos);

// ex-2
const customers =
  'niladri saha, arnab roy, abhisek chatterjee, manas majhi, sujit karmakar';
const getCustomerName = prompt('Enter customer name: ');
if (customers.indexOf(getCustomerName.toLowerCase()) !== -1) {
  console.log(`${getCustomerName} exists in your customer list.`);
} else {
  console.log(`${getCustomerName} doesn't exist in your customer list.`);
}
*/

/*
  string.search(str_or_regex)
  ----------------------------
  This method does the same job that the string.indexOf() method does, but it does not take a starting index as the second parameter.
  This method can accept Regular Expression in addition with strings, which the indexOf method cannot accept. 
*/

/*
const str =
  'Hello world, this is JavaScript tutorial, and now we are learning JavaScript string methods';
console.log(str.search(/JAVASCRIPT/gi));

const name = 'Narayan Chandra Saha';
const namePattern = /^[A-Za-z\s]+$/g;
if (name.search(namePattern) !== -1) {
  console.log('valid name...');
} else {
  console.log('invalid name...');
}

// verifiy email id
const email = 'sahaniladri25y@gmail.com';
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (email.search(emailPattern) !== -1) {
  console.log('valid email id...');
} else {
  console.log('invalid email id...');
}

// verify password
const password = '$A#a1992';
const passwordPattern =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
if (password.search(passwordPattern) !== -1) {
  console.log('valid password...');
} else {
  console.log(
    'password must have atleast-\n1) 6-16 characters,\n2) one alphabet,\n3) one number,\n4) one special character etc.'
  );
}

// verify date of birth
const dob = '1992-07-11';
const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
if (dob.search(dobPattern) !== -1) {
  console.log('valid date of birth!!!');
} else {
  console.log('invalid date of birth!!!');
}
*/

/*
  string.match(str_or_regex)
  ---------------------------
  This method returns an array for all the match cases of a text in a string.
  we can also use a regular expression instead of a text for a complex searching.
  To get global case-sensitive matches, we should use regular expression with /g flag, and for global, case-insensitive matches we should use /gi flag.
*/

// const str =
//   'JavaScript is one of the most useful programming languages of the web. JavaScript is a general purpose, interpreted, object-oriented scripting language. The major change has been brought to JAVASCRIPT in the year 2015';

/*
// ex-1
const textToSearch = 'Java';

// case-sensitive search
// const searchFound = str.match(textToSearch);

// global search using regular expression
// const searchFound = str.match(/Java/g);

// global case-insensitive search using regular expression
const searchFound = str.match(/Java/gi);

console.log(
  `There were ${
    searchFound.length
  } matches found, and the match strings are: ${searchFound.join()}`
);
*/

/*
// ex-2
const aboutPerson =
  'Hello, this is Niladri Saha. NILADRI SAHA is a full stack web developer. Niladri Saha works in Webgen Technologies. Niladri saha has an experience of 2+ years. niladri Saha is proficient in languages like JavaScript, Java, Python, PHP etc.';

// const findPerson = aboutPerson.match('Niladri Saha');
// const findPerson = aboutPerson.match(/Niladri Saha/g);
const findPerson = aboutPerson.match(/Niladri Saha/gi);
console.log(findPerson.join(), findPerson.length);
*/

// ex-3 (password validation - a password must have atleast one uppercase, one lowercase letter, one digit, one special character like @#$& etc.)

/*
const checkUppercase = password => {
  if (password.match(/[A-Z]/g)) return true;
};
const checkLowercase = password => {
  if (password.match(/[a-z]/g)) return true;
};
const checkDigit = password => {
  if (password.match(/[0-9]/g)) return true;
};
const checkSpecialchar = password => {
  if (password.match(/[@#$&-_]+/g)) return true;
};

const password = prompt('Enter a password: ');

if (
  checkUppercase(password) === true &&
  checkLowercase(password) === true &&
  checkDigit(password) === true &&
  checkSpecialchar(password) === true
) {
  console.log('valid password !!!');
} else {
  if (checkUppercase(password) !== true) {
    console.log('must have atleast one uppercase letter !!!');
  }
  if (checkLowercase(password) !== true) {
    console.log('must have atleast one lowercase letter !!!');
  }
  if (checkDigit(password) !== true) {
    console.log('must have atleast one digit !!!');
  }
  if (checkSpecialchar(password) !== true) {
    console.log('must have atleast one special character (@#$&-_) !!!');
  }
}
*/

/*
  string.matchAll(text_or_regex)
  -------------------------------
  Returns an iterator containing all the matches of a string or regular expression in another string.
  Introduced in ES2020.
*/

const aboutPerson =
  "Hello, this is Niladri Saha. NILADRI SAHA is a full stack web developer. Niladri Saha works in Webgen Technologies. Niladri saha has an experience of 2+ years. niladri Saha is proficient in languages like JavaScript, Java, Python, PHP etc.";

const allmatches = aboutPerson.matchAll(/Niladri Saha/gi);
for (let elem of allmatches) {
  console.log(elem);
}
