let arr=[3,10,18,20];
let a = arr.find((item)=>{//find method
    return item>=10;
})
console.log(a);

let b = arr.filter((item)=>{//filter()
    return  item>=10;
})
console.log(b);
let c = arr.map((item)=>{//map()
    return  item>=10;
})
console.log(c);

let d = arr.forEach((item)=>{//forEach()
     console.log(item)
})
console.log(d);