let a=234;
let b=90;

add=(a,b)=> {
    return a+b;
};
calc=(a,b,callback)=>{
    let result=0;
    result=callback(a,b);
    return result;
};
let c=calc(a,b,add);
console.log(c);