// setTimeout(function () {
//   console.log("venkatesh");
// }, 3000);

// setTimeout(() => {
//   console.log("hiii venky");
// }, 1000);

const intervalId = setInterval(function () {
  console.log("hii");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("interval stopped");
}, 10000);
