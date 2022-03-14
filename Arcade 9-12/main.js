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
