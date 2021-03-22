When your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

A new keyword called **let** was introduced in ES6 to solve this potential issue with the var keyword. 
If you were to replace var with let in the variable declarations of the code below, the result would be an error.
```js
let camper = 'James';
let camper = 'David';
//Error
```

```js
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```
As we can see in the code snippet below, we declare two different i variables in two different scopes because the let keyword allows these two i to be separate from each other (by being in the different scope -- hence not error).

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```
