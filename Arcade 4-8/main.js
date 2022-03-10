// Level 4
/*
assign a really large negative number to a variable
loop through the array
assign the product of the next 2 indexes to a variable
if the product is greater than the original product change the value of the original large negative number
return the product
*/

function solution(inputArray) {
  let largestProduct = -999;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let twoNumbers = inputArray[i] * inputArray[i + 1]
    if (twoNumbers > largestProduct) {
      largestProduct = twoNumbers;
    }
  }
  return largestProduct;
}

// Level 5
/*
get the base area of the number times itself
add the number to it multiplied toitself minus1
*/

function solution(n) {
  return n * n + (n - 1) * (n - 1)
}

// Level 6
/*
have variable to store the amount of statues needed set to zero
get all the values of the array in numeric order
subtract the firsrt element by the second selement
loop through the array
if the difference of the statues at the index plus 1 and statues at the index is greater than 1
add the number to the statues needed minues 1
*/

function solution(statues) {
  let statuesNeeded = 0;
  statues.sort((a, b) => {
    return a - b;
  })
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1) {
      statuesNeeded += statues[i + 1] - statues[i] - 1;
    }
  }
  return statuesNeeded;
}
