function vehicles(type, brand, model, year) {
  return {
    type: type,
    brand: brand,
    model,
    model,
    year: year,
    vehicleSpecification: function () {
      return `${this.type} ${this.brand} ${this.model} ${this.year}`;
    },
  };
}

let arr = ["car", "Audi", "q8", 2023];
const vehicle = vehicles(...arr);
let audi = vehicle.vehicleSpecification();
console.log(audi);
