let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "$3 $2 $1"; // change in order of the capture groups
let result = str.replace(fixRegex, replaceText)
