let s="malayalam";
let k=(s)=>{
      s= s.split("")
    let i=0;
    let j=s.length-1;
    while(i<j){
        if(s[i]!==s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;

}
let c=k(s);
console.log(c)