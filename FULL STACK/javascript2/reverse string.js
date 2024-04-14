let s="venkatesh";
let c= reverse(s);
let d=c.toString();
console.log(d);
function reverse(a){
     a=s.split("");
    let i=0;
let j=s.length-1;
while(i<j){
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
    i++;
    j--;  
}
return a;
}