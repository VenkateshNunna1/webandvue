const a = 1;
const b = 2;
const c = 3;
const obj = { a, b, c };
console.log(obj);

const lib = {
  sum: (a, b) => a + b,
  mul: (a, b) => a * b,
};

console.log(lib.sum(1, 4));
console.log(lib.mul(4, 7));

let user = (name, age, work) => {
  return {
    name,
    age,
    work,
    intro: () => `i am ${name} and my age is ${age} and my work is ${work}`,
  };
};

const obj1 = user("venkatesh", 24, "programmer");
console.log(obj1.intro());
