function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return `Animal bark`;
};

const animal = new Animal("frog");
console.log(animal);
console.log(animal.sound());

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
  this.pet = function () {
    console.log("hello guru");
  };
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sound = function () {
  return "bow-bow";
};
Dog.prototype.lifespan = function () {
  return "hi";
};
const dog = new Dog("johny", "labrator");
console.log(dog.name);
console.log(dog.breed);
//const ls = dog.lifeSpan();
//console.log(ls);
const sou = dog.sound();
console.log(sou);

const ls = dog.lifespan();
console.log(ls);
dog.pet();
