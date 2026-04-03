//? indexOf() - this method returns the index position of the first occurence of the string or it returns -1 if it is not found
//? Both the method accepts second parameter as the starting position for the searching
let str = "Please locate where 'locate' occurs!";
let index = str.indexOf("locate");
console.log("The position the string is starting from : ", index);

//? lastIndexOf() - this method returns the index of the last occurence of a specified text in the string returns -1 if not found
//? Both the method accepts second pa6rameter as the starting position for the searching
index = str.lastIndexOf("locate");
console.log("The last index or the position of the string is : ", index);
index = str.lastIndexOf("john");
console.log("The index is not found therefore : ", index);

//? search() -- method searches a string for a string(or a regular expression) and returns the position of the match
let text = "Please locate where 'locate' occures!";
console.log(text.search("locate"));
console.log(text.search(/where/)); //using the regular expression and searching

//? match() -- this method returns an array containing the results of matching a string against a string(or regular expression)
//? we also do have match all method that returns an iterator containing the results of matching a string against a string(or regular expression)
text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));
console.log(text.match(/ain/));
console.log(text.match(/ain/g));
console.log(text.match(/ain/gi));

//? includes() -- this method returns true or false if a string contains a specified value otherwise it will return false
//? checking if a string inclues world
text = "Hellow world, welcome to the universe.";
console.log(text.includes("world"));
console.log(text.includes("welcomes"));
console.log(text.includes("world", 12)); //? checking if a string includes world starting at position 12 also it is case sensetive

//? startsWith() -- this method returns true if a string begins with a specified value otherwise it will return false
//? this can also take another perameter for search as the starting position for searching and it is case sensetive
text = "Hellow world, Welcome to the universe.";
console.log(text.startsWith("Hellow"));
console.log(text.startsWith("world"));
console.log(text.startsWith("world", 7));

//? endsWith() - method returns true if a string ends with a specified value.
//? this can also take another perameter for search as the starting position for searching and it is case sensetive
text = "john Doe";
console.log(text.endsWith("Doe"));
console.log(text.endsWith("John"));
text = "Hello world, Welcome to the universe.";
console.log(text.endsWith("world", 11));
