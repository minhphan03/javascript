function htmlColorNames(arr) {
  // splice has three main parameters
  // first one: index to begin deleting
  // second one: amount of elements to delete
  // third one + : element(s) to add to that exact same index
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
