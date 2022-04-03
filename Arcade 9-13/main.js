// Level 9
/* variable to hold count
loop through arrays
if the length is longer than the tempoeray placeholder value assign the length to the placeholder
return the arrarys that pass the test
*/

function solution(inputArray) {
  let longest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length
    }
  }
  return inputArray.filter(arr => arr.length === longest);
}

// Level 10
/*
variable to hold placeholder count
loop through the first array
assign a variable to hold the index of values in first array that are in the second
increment the count and replace the second string with the ones in the first
return the count
*/

function solution(s1, s2) {
  var count = 0;
  for (var i = 0; i < s1.length; i++) {
    var j = s2.indexOf(s1[i]);
    if (j >= 0) {
      count++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return count;
}

// Level 11
/*
turn it into a string
divide the string in half
assign the counter placeholder
loop through the first half and add the numbers to the placeholder
loop throguh the second half and add the numbers to the placeholder
if the first is equal then true
else false
*/

function solution(n) {
  n = n.toString();
  var half = n.length / 2;
  var first = 0;
  var second = 0;
  for (var i = 0; i < half; i++) {
    first += +n[i];
  }
  for (var j = half; j < n.length; j++) {
    second += +n[j];
  }
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

// Level 12
/*
filter array
sort the array
loop through arrays and take out items that dont fit
return new array
*/

function solution(a) {

  var people = a.filter((el) => el != -1);
  people.sort((a, b) => b - a);
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = people.pop();
    }
  }
  return a;
}

// Level 13
function solution(str) {
  debugger;
  let splitStr = str.split('')
  let reverseStr = [];
  let myRegex = /\w/i
  loop1:
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '(') {
      loop2:
      for (let j = i + 1; j < splitStr.length; j++) {
        if ((splitStr[j] !== '(') && (splitStr[j] !== ')')) {
          reverseStr.push(splitStr[j]);
        }
        if (splitStr[j] === '(') {
          i = j - 1;
          reverseStr = [];
          continue loop1;
        } else if ((splitStr[j] === ')')) {
          reverseStr.reverse();
          for (let k = 0; k < reverseStr.length; k++) {
            splitStr.splice(i, 1, reverseStr[k]);
            i++
          }
          splitStr.splice(i, 2);
          if (!splitStr.includes('(')) {
            return splitStr.join('');
          } else if (splitStr.includes('(')) {
            reverseStr = [];
            i = -1;
            continue loop1;
          }
          i = 0;
          reverseStr = [];
          continue loop1;
        }
      }
    }
  }
  return splitStr.join('');
}
