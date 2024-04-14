const person = {
  name: "venkatesh",
  age: 24,
  greetRegular: function () {
    console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old`);
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old`;
  },
};
person.greetRegular();
const b = person.greetArrow();
console.log(b);
const { name, age, greetRegular, greetArrow } = person;
console.log(name);
console.log(age);
greetRegular();
console.log(greetArrow());
