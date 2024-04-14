let num = new Map();
num.set("a", "1");
num.set("b", "2");
num.set("c", "3");
console.log(num.get("a"));
console.log(num.size);
console.log(num.delete("b"));
console.log(num.size);

let arr = [5, 78, 90, 78];
let newArr = arr.map((item, index, arr) => {
  console.log(item, index, arr);
  return item * 2;
});
console.log(newArr);

let peoples = [
  { firstName: "macom", lastName: "reynolds" },
  { firstName: "Venkatesh", lastName: "Nunna" },
];

let [{ firstName, lastNme }, arr2] = peoples;
console.log(firstName);
console.log(arr2);
