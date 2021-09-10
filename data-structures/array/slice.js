function forecast(arr) {
  // slice takes two parameters:
  // first one: the index to begin copy
  // second one: the index (exclusive) to stop
  
  // return ['warm', 'sunny']
  return arr.slice(2,4);
  
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
