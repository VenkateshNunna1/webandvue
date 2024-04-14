let person = {
  firstName: "venkatesh",
  lastName: "Nunna",
  age: 19,
  cars: ["benz", "audi", "toyato"],
  isProgrammer: true,
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person["age"]);
console.log(person.cars);
console.log(person.cars[1]);
console.log(person.isProgrammer);

let car = {
  type: "benz",
  model: "i 20",
  color: "red",
};
console.log(typeof car);
console.log((car.type = "audi"));
car.engine = "v20";
console.log(car);
