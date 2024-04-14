const person={
    id:1,
    name:"venkatesh nunna",
    age:25,
    role:"developer"
};
const{id,name,... best}=person;
console.log(id);
console.log(name);
console.log(best);