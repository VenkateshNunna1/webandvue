function add(a, b, hello) {
  console.log(hello);
  return a + b;
}
let c = add(1, 2, greeting);
console.log(c);
function greeting() {
  console.log("good morning sir");
}

let a = 9;
let b = 8;

let d = calc(a, b, function (a, b) {
  return a + b;
});
console.log(d);

function calc(a, b, callback) {
  let result = 0;
  result = callback(a, b);
  return result;
}
