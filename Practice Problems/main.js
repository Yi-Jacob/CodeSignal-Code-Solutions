// Level 1

function swap(tuple) {
  tuple.push(tuple[0]);
  tuple.splice(1,1);
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
      console.log('11')
    } else if ( i % 3 === 0 ) {
      console.log('1')
    } else if(i % 5 === 0) {
      console.log('1')
    }
  }
}

// Level 4

// function charCounts(string) {
//   var obj = {};
//   for (var char in string) {
//     if (obj[char]) {
//       obj[char]++
//     } else {
//       obj[char] = 1
//     }
//   }
//   return obj
// }

// const countChar = (str) {
//   const counts = {};
//   for (const s of str) {
//     if (counts[s]) {
//       counts[s]++
//     } else {
//       counts[s] = 1
//     }
//   }
//   return counts;
// }

// program to check the number of occurrence of a character

function countAmountOfEachCharacter(inputString) {
  const returnObject = {};

  // loop over input string
  for (let i = 0; i < inputString.length; i++) {
    // check if character has been seen before
    if (returnObject.hasOwnProperty(inputString[i])) {
      // increase its count by 1
      returnObject[inputString[i]] += 1;
    } else {
      // add it to the object with a count of 1
      returnObject[inputString[i]] = 1;
    }
  }

  return returnObject;
}
