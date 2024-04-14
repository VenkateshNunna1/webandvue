let set = new Set();
set.add(1);
set.add(2.0);
set.add("venkatesh");
set.add({name:"venky",
age:23});
set.add([1,2,3]);
console.log(set.values());
for(let value of set.values()){
    console.log(value);
}
console.log(set.keys());


let set1 = new Set();
set1.add("a");
set1.add("b");
set1.add("c");
for(let values in set1){
    console.log(values);
}