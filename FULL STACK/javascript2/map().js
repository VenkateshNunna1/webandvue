const map=new Map();
console.log(map);
const keyOne="venkatesh";
const keyTwo={};
const keyThree=function(){};
//set the keys and values 
map.set(keyOne,"value of key one");
map.set(keyTwo,"value of key two ");
map.set(keyThree,"value of key three");
console.log(map);

console.log(map.keys());// get all the keys
console.log(map.values());//get all the values 

//get the value rom the keys

console.log(map.get(keyOne));
console.log(map.get(keyTwo));
console.log(map.get(keyThree));

console.log(map.size);
console.log(map.delete(keyTwo));
console.log(map.size);
//map.clear();
console.log(map.size);
console.log(map.has(keyOne));
console.log(typeof map);

map.forEach((value,key)=>{
    console.log(key,value);
})


for(let [key,values] of map){
    console.log(key,values);
}
for(let key of map.entries()){
    console.log(key);
}

for(let key of map.keys()){
    console.log(key)
}
for(let key of map.values()){
    console.log(key);
}
console.log(map.entries());
console.log(map.values());