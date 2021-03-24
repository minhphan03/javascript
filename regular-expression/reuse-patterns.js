let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // repeat first group \1 (\d+) and the space \2 and the first group again \1
let result = reRegex.test(repeatNum);
