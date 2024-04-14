function Person(name, age, gender) {
  this.name = name;
  (this.age = age), (this.gender = gender);
  this.info = function () {
    return `${this.name} ${this.age} ${this.gender}`;
  };
}
const arr = ["venkatesh", 23, "male"];
const venky = new Person(...arr);
console.log(venky.name);
console.log(venky.age);
console.log(venky.gender);
const info1 = venky.info();
console.log(info1);

const arr1 = ["ganesh", 20, "male"];
const gani = new Person(...arr1);
console.log(gani.name);
console.log(gani.age);
console.log(gani.gender);
const info2 = gani.info();
console.log(info2);
