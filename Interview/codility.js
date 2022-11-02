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


// Test 2

function solution() {
  // write your code in JavaScript (Node.js 14)
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementById
  // or using jQuery:
  //    $('some_tag')
  //
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  let first_name = $("#first_name").val();
  let last_name = $("#last_name").val();
  let email = $("#email").val();
  let company_name = $("#company_name").val();
  let phone = $("#phone").val();

  let validation = false;
  if ($("#type_person").is(":checked")) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    validation = regex.test(email);
    if (validation == false) return false;
    first_name = first_name.replace(" ", "");
    last_name = last_name.replace(" ", "");
    if (first_name == "" || last_name == "") return false;
  }

  if ($("#type_company").is(":checked")) {
    company_name = company_name.replace(" ", "");
    if (company_name == "") return false;
    phone = phone.replace(/[\s-]/g, "").match(/^\d{6,}$/);
    if (!Boolean(phone)) return false;
  }

  return true;
}
