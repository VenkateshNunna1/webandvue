// Define a custom pop method
Array.prototype.pop = function () {
  console.log("gani");
};

// Example usage
const myArray = [1, 2, 3, 4, 5];
const removedElement = myArray.Pop();

console.log(myArray); // Output: [2, 3, 4, 5]
console.log(removedElement); // Output: 1
