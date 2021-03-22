class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//idk about this but here is another example

class Thermostat {
  constructor(temp) {
    this._temp = temp;
  }

  set temperature(newTemp) {
    this._temp = (newTemp*9.0)/5+32;
  }

  get temperature() {
    return (this._temp-32)*5/9.0;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
