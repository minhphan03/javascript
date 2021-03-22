We can accept as many parameters without checking if they have the same numbers of parameters we need by using the ... (rest) parameter.
```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```

The reduce function of the args accept normally two variable: the callback and the initial value (on the example above)

(a,b) => a + b is the callback value. The accumulator, a, is set to the initial value 0. b is the value variable, and the accumulator will start adding values and looping
until the array ends.

This will reduce the arrays a lil bit. The a+b now then becomes the initial value, and it will be added continually until we have done with the args.

If not explicitly called, the initial value would be the value of the 0th index particle of the array.

```js
const product = (...n) => {
  return n.reduce((a, b) => a * b, 1);
}
```
### Using the accummulator:

For example we have this data:
```js
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]
```
If we want to calculate the sum of population except China, we can do this way:
```js
let sum = data.reduce((acc, val) => {
  return val.country == 'China' ? acc : acc + val.pop;
}, 0);
```

In this example, we have the accumulator variable acc and a object. If the object's country property is China, we will not add anything to the accumulator. Otherwise, we will
add the population property value to the accumulator.
