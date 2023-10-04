/*
  string.replace(text_or_regex_to_replace, text_with_which_to_replace) ->
    This method replaces only the first occurrence of a string with another string. It performs a case-sensitive search. To replace all occurrences, use regular expression with /g flag. To perform case-insensitive search use regular expression with /i flag.
*/

const str = "Java is a general purpose, object oriented programming language, java is used in web programming, AI, ML and data science";

// only the first occurrence will be replaced
const replacedStr = str.replace("Java", "Python");
console.log(replacedStr);

// case-sensitive global search will be performed
const replacedStr2 = str.replace(/Java/g, "Python");
console.log(replacedStr2);

// case-insensitive global search will be performed
const replacedStr3 = str.replace(/JAVA/gi, "Python");
console.log(replacedStr3);

/*
  string.replaceAll(text_or_regex_to_replace, text_with_which_to_replace) ->
    This string method performs a case-sensitive global replacement of a string or regular expression with another string. 
    In case of using regular expression, use /g flag, otherwise, it will throw an error.
*/

const str2 = "Hello and welcome to JavaScript world. JavaScript is an interpreted, object-oriented scripting language primarily designed for web browsers, javascript provides interactivity to web pages and make web pages more dinamic";

// perform a case-sensitive replacement
const replacedStr2a = str2.replaceAll("JavaScript", "JAVASCRIPT");
console.log(replacedStr2a);

// perform a case-insensitive global replacement
const replacedStr2b = str2.replaceAll(/JavaScript/gi, "JAVASCRIPT");
console.log(replacedStr2b);