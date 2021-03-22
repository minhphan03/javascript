// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(object, id, prop, value) {
  
  
  if (value === "") {
    delete object[id][prop];
  }

  // the delete value should go first because if the prop is "tracks" and this if statement goes first, it will skip the delete if statement
  // and create / update the array with a blank instead
  
  else if (prop === "tracks")
  {
     if (!object[id].hasOwnProperty("tracks")) {
        object[id].tracks= [];
     }
    object[id].tracks.push(value);
  }

  else {
    object[id][prop] = value;
  }

  return object;
}
