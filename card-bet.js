//This variable count will not be reset to 0 every time we call the function cc because it is a global variable. Therefore, it is able to add multiple card counts. 

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }

  var state = 'Hold';
  if (count > 0) {
    state = 'Bet';
  }
  return count + " " + state;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
