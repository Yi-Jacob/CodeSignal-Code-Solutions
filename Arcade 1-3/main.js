// Level 1
function solution(param1, param2) {
  return param1 + param2;
}

// Level 2
function solution(year) {
  var century = year / 100
  if (year % 100 === 0) {
    return century
  } else {
    return Math.floor(century + 1);
  }
}

// Level 3
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
