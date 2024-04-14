Array.prototype.customPop = function () {
  console.log("gani");
};

Array.prototype.gani = function () {
  console.log("gani has six pack");
};

let arr = [1, 2, 34, 6];
arr.gani();
arr.customPop();
console.log(arr);
