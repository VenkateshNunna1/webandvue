let a=9;
let b=67;

 let add=function(a,b){
    return a+b;
}
let sub=function(a,b){
    return a-b;
}
let mul=function(a,b){
    return a*b;
}
let div=function(a,b){
    return a/b;
}

let cal=function(a,b,add){
    let result=0;
    result=add(a,b);
    return result;
}

let c=cal(a,b,add);
console.log(c);

