var katzDeliLine = [];
var counter = 0;

function takeANumber(katzDeliLine) {
  var newNumber = katzDeliLine.length + 1;
  katzDeliLine.push(newNumber); //add new person to line
  var position = katzDeliLine.length - counter;
  return "Welcome, your number is " + newNumber + ". You are " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { //firt checks if array/line is empty
    return "There is nobody waiting to be served!";
  }
  var firstPerson = katzDeliLine[0]; //store the first person before we remove them
  katzDeliLine.splice(0, 1); //remove 1 person at index zero
  return "Currently serving " + firstPerson + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var currLine = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {
    var currPostion = i + 1
    var currPerson = katzDeliLine[i];
    currLine += currPostion + ". " + currPerson + ", ";
  }
  return currLine.slice(0, currLine.length - 2); //the slice is to remove the extra comma and space
  //could also use an if statement inside the for loop to check if youre at the last position
}
