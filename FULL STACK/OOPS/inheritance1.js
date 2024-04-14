class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.greet = function () {
      console.log(`${this.name} ${this.level}`);
    };
    this.work = function () {
      console.log("hero must work 8 hours");
    };
    this.diet = () => {
      console.log("8 eggs");
    };
    this.car = function () {
      console.log("car must there");
    };
  }
  a = 5;
  body() {
    console.log("hero must should have been six pack");
  }
  dress() {
    console.log("8 shirts and pants ");
  }
}
const hero1 = new Hero("ganesh", 2);
console.log(hero1.name);
console.log(hero1.level);
hero1.greet();
hero1.work();
hero1.diet();
hero1.car();
hero1.body();
hero1.dress();
console.log(hero1);
class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
  body() {
    console.log("hero must should have been eight pack");
  }
  dress() {
    console.log("12 shirts and pants ");
  }
}
const mega = new Mega("venkatesh", 3, 45);
console.log(mega);
console.log(mega.name);
console.log(mega.level);
mega.greet();
mega.work();
mega.diet();
mega.car();
mega.body();
mega.dress();
console.log(mega.a);
console.log(mega.food);
