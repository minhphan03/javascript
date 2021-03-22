ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus would have a value of 89.
```
...arr returns an unpacked array. 
In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
The following code will not work:
```js
const spreaded = ...arr;
```

Some examples:
```js
arr2 = [...arr1]

//Copy the content from arr1 to arr2
```
