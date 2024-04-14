let obj={
    name:"venky",
    age:21,gender:"male"
};

user(obj);

function user( {name:n,age:age,gender:gender}){
    console.log(n);
    console.log(age);
    console.log(gender);
}