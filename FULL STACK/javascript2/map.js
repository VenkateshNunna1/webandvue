let arr = [1, 3, 4567, 88]; //doubling
let arr1 = arr.map((item) => item * 2);
console.log(arr1);

let arr2 = [1, 2, 4, 56, 6];
let r = arr2.map((item) => {
  return item * item;
});
console.log(r);

let s = ["venkatesh", "ganesh"];
s = s.map((item) => {
  return item[0].toLocaleUpperCase() + item.substring(1);
});
console.log(s);

let w = [
  {
    name: "venky",
    gender: "male",
  },
  {
    name: "ganesh",
    gender: "male",
  },
];
// console.log(w[0].name,w[0].gender)
let z = w.map((items) => {
  return [items.gender, items.name];
});
console.log(z);

let num = [78, 5, 6, 67];
let num1 = num.map((item) => item * 10);
console.log(num1);

let arr12 = [568, 89, 89, 78, 38];
let res = arr12.map((item) => {
  return item * 10;
});
console.log(res);
