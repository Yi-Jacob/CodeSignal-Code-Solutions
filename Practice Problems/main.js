// Level 1

function swap(tuple) {
  tuple.push(tuple[0]);
  tuple.splice(0,1);
  return tuple
}



// Level 2

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

// Level 3

function fuzeBuzz(limit) {
  for (var i = 0; i < limit; i++) {
    if (i % 15 === 0) {
      console.log('1')
    } else if ( i % 3 === 0 ) {
      console.log('2')
    } else if(i % 5 === 0) {
      console.log('3')
    }
  }
}

// Level 4

function countAmountOfEachCharacter(inputString) {
  const returnObject = {};
  for (let i = 0; i < inputString.length; i++) {
    if (returnObject.hasOwnProperty(inputString[i])) {
      returnObject[inputString[i]] += 1;
    } else {
      returnObject[inputString[i]] = 1;
    }
  }
  return returnObject;
}

// Level 5

function unique(str) {
  var string = '';
  for (var i = 0; i < str.length; i++) {
    if (string.includes(str[i]) === false) {
      string += str[i]
    }
  }
  return string
}

// Level 6

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    sum += number;
  }
  return sum;
}

// Level 7

function difference(string) {
  var strSplit = string.split(' ');
  var longestWord = 0;
  var shortestWord = strSplit[0].length;
  var difference = longestWord - shortestWord
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length;
      } else {
      shortestWord = strSplit[i].length;
      }
    }
  return difference
}

// Level 8

/* given a list of numbers, get the indexes of the pair of adjacent numbers with the highest sum */

function largestSum(array) {
  var max = Math.max(array)
  return max
}

// How to map without map
function map(array, transform) {
  var mapped = []
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]))
  }
  return mapped
}

// How to filter with no filter
function filter(array, predicate) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filtered.push(array[i])
    }
  }
  return filtered
}
