function Car(name) {
  this.name = name;
  this.wheels = function () {
    console.log("every car must have been 4 wheels");
  };
}

Car.prototype.bluetooth = function () {
  console.log("everycar comes with bluettoth");
};

function Audi(name, model) {
  Car.call(this, name);
  this.model = model;
  this.sound = function () {
    console.log("Audi has beautiful sound system");
  };
}

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.airBallons = function () {
  console.log("Audi has 8 air ballons");
};
Audi.prototype.bluetooth = function () {
  console.log("Audi comes with advance bluetooth");
};
let arr = ["audi", "Q8"];
const audi = new Audi(...arr);
console.log(audi);
console.log(audi.name);
console.log(audi.model);
audi.sound();
audi.airBallons();
audi.wheels();
audi.bluetooth();
