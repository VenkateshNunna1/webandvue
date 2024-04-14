function calc(a,b){
    const add=a+b;
    const sub=a-b;
    const mul=a*b;
    const div=a/b;
    return [add,sub,mul,div];
}
const [add,sub,mul,div]=calc(10,5);
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);