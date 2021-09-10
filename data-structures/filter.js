//filter out a certain element in a nested array

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0 ; i< arr.length; i++)
  if (arr[i].indexOf(elem) !== -1) {
    // The filter() method creates an array filled with all array elements that pass a test (provided by a function).
    newArr.push(arr[i].filter((item)=> {
      return item !== elem;
    }))
  }
  return newArr;
}
