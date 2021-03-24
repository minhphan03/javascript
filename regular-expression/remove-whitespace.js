let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // select white space at the first and end of the string
let result = hello.replace(wsRegex, ""); // trim whitespace
