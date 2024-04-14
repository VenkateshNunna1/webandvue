// let color=['red','blue','tean','green'];
// color.forEach((colors,key)=>{
//     console.log(color[key]);
// })

// let s=[1,234,6]
// s.forEach(myfunction);

// function myfunction(item,index,arr){
//  console.log(item,index,arr,s[index]);
// }
// let st="venkatesh";
// for(let i=0;i<st.length;i++){
//    console.log(st[i]);
// }
// for(let st1 in st){
//     console.log(st1,st[st1]);
// }
// for(let st2 of st){
//     console.log(st2);
// }
let arr =[1,2,3,45,6];
let sum=0;
function adder(number){
   sum=sum+number;
   return sum;  
}
arr.forEach(adder);
console.log(sum);

    let s=['venkatesh','ganesh']
    let r=s.forEach((item,index,array)=>{
       console.log(item[0].toUpperCase()+item.substring(1),index,array);
    })

    let w=[1,2,3];
    let cd = w.forEach((item,index,array)=>{
    console.log(item,index,array)
    })
  