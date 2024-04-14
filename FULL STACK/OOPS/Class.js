class Person {
  constructor(name, age, mobileNumber) {
    //instance members
    this.name = name;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.work = function () {
      return `${this.name} is more interested on programming `;
    };
  }
  //prototype members
  greet() {
    return `${this.name} ${this.age} ${this.mobileNumber}`;
  }
}

const gani = new Person("ganesh nunna", 21, 6309875788);
console.log(gani.name);
console.log(gani.age);
console.log(gani.mobileNumber);
console.log(gani.work());
console.log(gani.greet());
console.log(gani);
