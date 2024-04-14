 let  arr =[12.,56,66,5]; //spread operator in arrays
 let arr1=[34566,8,97,0,9];
 let arr2 =[... arr,... arr1];
 console.log(arr2);


 function venky(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

 }
 const arr5 =[1,23,5];
 venky(... arr5);


 let obj1={
    a:1,
    b:"apple"
 };
 let obj2 ={
    id:1,
    name:"venkatesh nunna",
    ... obj1
 };
 console.log(obj2)
