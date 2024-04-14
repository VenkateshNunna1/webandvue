let names=['ve','pavan','sudhi'] //some()
let res1=names.some((name)=>{
    return name.length===5;
})
console.log(res1);
let res2=names.some((name)=>{
    return name.length<3;
})
console.log(res2)

let res3=names.some((name)=>{
   return name.length==2;
})
console.log(res3)

let res4=names.some((name)=> name.length==2
);
console.log(res4)

const songs=[{name:'lucky you',duration:4.34},
{name:"just like you",duration:3.23},
{name:"the search",duration:2.33},
{name:"old town road",duration:1.43},
{name:"the box",duration:5.23}
]
const res6=songs.every((song)=>{
    return song.duration>2.00;
})
console.log(res6);

const res7=songs.some((song)=>{
    return song.duration>2.00;
})
console.log(res7);
