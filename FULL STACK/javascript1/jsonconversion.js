let person={
    firstname:"venkatesh",
    lastname:"nunna",
    age:23
};

   let jsonobject=JSON.stringify(person);//here we are converting object to json string
   console.log(jsonobject)
   let object1 = JSON.parse(jsonobject);//here we are converting json string to object
   console.log(object1);