let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((previous, current) => {
  return previous + current;
}, 0);
console.log(sum);

let d = arr.reduce((p, c) => {
  console.log(`previous:${p}`);
  console.log(`current ${c}`);
});

let people = [
  { name: "venkatesh", age: 23 },
  { name: "ganesh", age: 20 },
  { name: "sudhi", age: 22 },
];
let oldestage = people.reduce((p, c) => {
  return c.age > p ? c.age : p;
}, 0);
console.log(oldestage);

let numbers = [2, 3, 4, 5];
let multiply = numbers.reduce((initial, current) => {
  return initial * current;
}, 1);
console.log(multiply);

let arr4 = [2, 3, 4, 5];
let res = arr.reduce((previous, current) => {
  return previous * current;
}, 1);
console.log(res);

let a = "venkatesh";
