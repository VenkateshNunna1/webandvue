let arr = [12, 67, 8, 9, 7];
let sum = 0;
let add = (item, index, arr) => {
  sum += item;
};
arr.forEach(add);
console.log(sum);
