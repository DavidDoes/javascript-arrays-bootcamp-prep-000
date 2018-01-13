var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(arr, element){
  var newArray = [element, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element){
  var newArray = [...arr, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}