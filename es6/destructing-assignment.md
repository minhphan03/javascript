## Destructing Assignment

**Destructuring assignment** is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

You can tweak the destructing assignment to create new variables and assign destructed values to new variables

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
```
----
You can use it to change positions of objects / variables in an array, or access variables in an array.
```js
let a = 8, b = 6;

[a, b] = [b, a]
```
-----
The comma allows us to skip indexes:
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```
The console will display the values of a, b, and c as 1, 2, 5.

-----
For nested objects, we can essentially access variables like this:
```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

```
----
We can also combine with the rest parameter to make functions:
```js
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  const [a,b, ...arr] = list;
  return arr;
}
```
-----
Use destructing arguments to accepted selected variables into the function. We don't need to pass the objecct's name; just the name of the properties (and make sure they are 
present in the object) in order for the function to work:
```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({min, max}) => (max + min) / 2.0; 

```

