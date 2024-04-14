let a=9;
let b=9;
let c=cal(a,b,add);
console.log(c)
function add(a,b){
    return a+b;
}
function cal(a,b,callback){
  let result=0;
  result=add(a,b);
  return result;
}