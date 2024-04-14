function Encapsulation() {
  let count = 0; //private variable;
  this.setter = function () {
    count++;
  };
  this.getter = function () {
    return count;
  };
}
const enc = new Encapsulation();
enc.setter();
enc.setter();
enc.setter();
console.log(enc.getter());
