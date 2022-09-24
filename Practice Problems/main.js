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

// Roman Numeral

// Old - school Roman numerals.In the early days of Roman numerals,
//   the Romans didn't bother with any of this new-fangled subtraction
// IX nonsense.No sir, it was straight addition, biggest to littlest -
//   so 9 was written VIIII, and so on.Write a method that, when
// passed an integer between 1 and 3000(or so), returns a string
// containing the proper old - school Roman numeral.In other words,
//   old_roman_numeral 4 should return 'IIII'.
// For reference, these are the values of the letters used:
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

const OLD_ROMANS = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I',
}

function old_roman_numeral(num) {
  let string = '';
  let temp = num;

  Object.keys(OLD_ROMANS).reverse().forEach((key) => {
    const value = Number(key);
    const count = Math.floor(temp / value);
    string += OLD_ROMANS[key].repeat(count);
    temp = temp % value;
  })

  return string;

}

console.log(old_roman_numeral(87));
