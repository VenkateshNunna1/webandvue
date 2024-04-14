let a = 7;
let b = 9;

let calc = function (a, b, callback) {
  let res = 0;
  res = callback(a, b);
  return res;
};

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

let e = calc(a, b, add);
console.log(e);
let f = calc(a, b, sub);
console.log(f);
let g = calc(a, b, mul);
console.log(g);
