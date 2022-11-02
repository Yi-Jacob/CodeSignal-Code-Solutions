// Test 1

function solution(N) {
  if (N == 0) return 1;
  // write your code in JavaScript (Node.js 14)
  var n = N.toString().split("").length;
  var r = {};
  N.toString()
    .split("")
    .forEach(function (digit) {
      r[digit] = r[digit] || 0;
      r[digit] += 1;
    });

  var z = N.toString()
    .split("")
    .reduce(function (count, digit) {
      return digit === "0" ? count + 1 : count;
    }, 0);

  var denominator = Object.keys(r)
    .map(function (key) {
      return r[key];
    })
    .reduce(function (result, curr) {
      return result * factorial(curr);
    }, 1);

  //console.log(n, r, z);
  return ((n - z) * factorial(n - 1)) / denominator;
}
