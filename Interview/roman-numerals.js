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
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I",
};

function old_roman_numeral(num) {
  let string = "";
  let temp = num;

  Object.keys(OLD_ROMANS)
    .reverse()
    .forEach((key) => {
      const value = Number(key);
      const count = Math.floor(temp / value);
      string += OLD_ROMANS[key].repeat(count);
      temp = temp % value;
    });

  return string;
}

console.log(old_roman_numeral(87));
