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

function accessElementInArray(arr, index){
  return arr[2];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  var newArray = arr.slice(0);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr;
}

function removeElementFromEndOfArray(arr){
  var newArray = arr.slice(2, arr.length - 1);
  return newArray;
}