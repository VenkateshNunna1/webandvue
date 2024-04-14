const button = document.querySelector(".button");
//button.onClick = console.log("hello venkatesh");

// function red() {
//   console.log("hello world how are you");
// }

// const button = document.querySelector(".button");
// button.onClick = function () {
//   console.log("hello ganesh");
// };

// button.addEventListener("click", (addEventListener) => {
//   console.log(event);
// });

const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
  console.log("ganesh");
  console.log(event);
});

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);
});
