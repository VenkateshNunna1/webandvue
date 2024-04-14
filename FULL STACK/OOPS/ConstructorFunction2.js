function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    return `starting the ${this.make} ${this.model}....`;
  };
  this.stop = function () {
    return `Stopping the ${this.make} ${this.modedl}...`;
  };
}
let toyatoSpec = ["toyato", "fortuner", 2019, "black"];
const toyato = new Car(...toyatoSpec);
console.log(toyato.make);
console.log(toyato.model);
console.log(toyato.year);
console.log(toyato.color);
const start1 = toyato.start();
console.log(start1);
const stop1 = toyato.stop();
console.log(stop1);
