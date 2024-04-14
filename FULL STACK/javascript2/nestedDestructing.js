let songs = [
  { song: "lucky you", musicdirector: "joyner" },
  { song: "just like you", musicdirector: "nf" },
  { song: "humble singer", musicdirector: "lil nas" },
];

let [{ song: s1, musicdirector: m1 }, , { song: s2, musicdirector }] = songs;
console.log(s1);
console.log(m1);
console.log(s2);
console.log(musicdirector);

const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;
console.log(car);
console.log(truck);
console.log(suv);

let a = 7;
let b = 8;

let cal = (a, b) => {
  let add = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;
  return [add, sub, mul, div];
};

// let val = cal(a, b);
// console.log(val[0]);
let [add, sub1, multi, div1] = cal(a, b);
console.log(add);
console.log(sub1);
console.log(multi);
console.log(div1);

let person1 = {
  id: 1,
  firstName: "venkatesh",
  lastName: "nunna",
  age: 25,
  mobileNumber: 6309875788,
};

function person({ id, firstName, lastName, age, mobileNumber }) {
  return `my name is ${firstName} and my age is ${age}`;
}
let val = person(person1);
console.log(val);
