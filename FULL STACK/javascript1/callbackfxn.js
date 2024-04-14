function greet(fxn) {
  console.log("hello gani");
  fxn();
  console.log(fxn);
}

function fxn() {
  //call back function
  console.log("hello world");
}
greet(fxn); //greet is higher order function
