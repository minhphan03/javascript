// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects through properties.

function phoneticLookup(val) {
  var result = "";

  // For the object, it is a variable so use the keyword var at the beginning
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo":"Easy",
    "foxtrot": "Frank"
    
  //Don't forget the semicolon at the end of the object declaration
  };
  // Access the object by using bracket notation
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
