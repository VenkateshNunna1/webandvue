const person = {
  id: 1,
  name: "venkatesh",
  mobileNumber: 6309875788,
  gender: "male",
};
const { id, name, ...rest } = person;
console.log(id);
console.log(name);
console.log(rest);
