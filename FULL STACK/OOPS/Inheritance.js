class Car {
  constructor(name, model, year, special) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.special = special;
    this.buildQuality = function () {
      return `car must be comes with great build quality`;
    };
  }
  bluetooth() {
    console.log("bluetooth 5 is mandatory");
  }
}

class Audi extends Car {
  constructor(name, model, year, special, warranty, airBags) {
    super(name, model, year, special);
    this.warranty = warranty;
    this.airBags = airBags;
    this.best = function () {
      return `${this.name} is the best car in the world`;
    };
  }
  //override from car class
  bluetooth() {
    console.log("audi has to be use bluetooth 6");
  }
  ventilation() {
    return `Audi comes with best ventilation`;
  }
}
let audiIstanceVariables = [
  "audi",
  "q5",
  2023,
  "4 wheel drive",
  "25 years",
  "8 bags",
];
const audi = new Audi(...audiIstanceVariables);
console.log(audi.name);
console.log(audi.model);
console.log(audi.year);
console.log(audi.special);
console.log(audi.warranty);
console.log(audi.airBags);
console.log(audi.best());
console.log(audi.ventilation());
audi.bluetooth();
