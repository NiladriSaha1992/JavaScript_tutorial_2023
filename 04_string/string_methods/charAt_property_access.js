/*
  string.charAt(position) ->
    This method returns the character at a specified position of a string.
    If no character is found, it returns an empty string.
*/

const str = "Hello World";
console.log(`Character at 6th position: ${str.charAt(6)}`);
console.log(`Character at 12th position: ${str.charAt(12)}`); // will return an empty string

/*
  String Property Access ->
    Using [position] notation we can access a specified character of a string
*/

const str2 = "Hello world, this is JavaScript string method tutorial";
console.log(`Characters at 10th and 15th position are "${str2[10]}" and "${str2[15]}" respectively.`);