let user={
    name:"venkatesh nunna",
    age:19,
    gender:"male"
};
for(let keys in user){
    console.log(keys,`${user[keys]}`);
}

let fruits=["apple","banana","grapes"];
for(let index in fruits){
    console.log(index,`${fruits[index]}`);
}

let s="venkatesh";
for(let s1 in s){
    console.log(s1,s[s1]);
}