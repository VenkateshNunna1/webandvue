let a=5;
let b=10;
let c= calc(a,b,add)
console.log(c);
let d=calc(a,b,sub)
console.log(d);
function calc(a,b,callback){
  let result=0;
  result=callback(a,b);
  return result;
}
function add(a,b){
    return a+b;
}
function sub(){
    return a-b;
}