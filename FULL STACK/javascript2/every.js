let names=['venky','pavan','sudhi'] //every()
let res1=names.every((name)=>{
    return name.length===5;
})
console.log(res1);
let res2=names.every((name)=>{
    return name.length<3;
})
console.log(res2)

let name=['pavan','gani','sumanth']
let res3=name.every((name)=>{
    name.length===4;
})
console.log(res3)
