function x() {
  a = 7; //public
  this.c = 8; //public
  const b = 9; //private
  return function y() {
    //getter method
    console.log(b);
  };
  //return y;or y();
}
let z = x();
console.log(a);
console.log(c);
console.log(z);
z();
