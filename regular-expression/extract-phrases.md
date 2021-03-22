```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
```
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
```js
'string'.match(/regex/);
/regex/.test('string');
```
