// Level 1
/*
add the 2 parameters
*/
function solution(param1, param2) {
  return param1 + param2;
}

// Level 2
/*
get the century of the year by dividing by 100
if its the century return the century number
if its not round down then add a year
*/
function solution(year) {
  var century = year / 100
  if (year % 100 === 0) {
    return century
  } else {
    return Math.floor(century + 1);
  }
}

// Level 3
/*
get a new string to get rid of spaces by replacing spaces with no spaces
get the lenght of the string and assign it to a variable
loop through the first half of the string
get the value of each index and assign it to a variable
get the values of the back half
if they are not equal it is not a palindrome
*/

function solution(string) {
  var newString = string.replace(' ', '');
  var length = newString.length - 1;
  for (var i = 0; i < length / 2; i++) {
    var x = newString[i];
    var y = newString[length - i];
    if (x !== y) {
      return false;
    }
  }
  return true;
}
