let a = 9;
let b = 8;
let c = function (a, b) {
  return a + b;
};
let d = c(a, b);
console.log(d);

let e = function (greeting) {
  return greeting();
};

let f = e(function () {
  console.log("hello world");
});

function showCallFunc(func) {
  const value = 10;
  func(value);
}
showCallFunc(function (value1) {
  console.log(value1);
});

function showCallFunc(fn) {
  let value = 10;
  fn(value);
}
showCallFunc(function (value) {
  console.log(value);
});
