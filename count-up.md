For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

```js
function countup(n) {
  if (n < 1) {
    return [];
  } else {
  
  //The value of a constant can't be changed through reassignment, and it can't be redeclared.
  //The use of const here is to declare that there is only one countArray variable in this function
  //and it will be updated instead of being reassigned by another value countup(n-1)
  
  //if we declare new variable countArray instead of using const, the countArray will be duplicated
    
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
