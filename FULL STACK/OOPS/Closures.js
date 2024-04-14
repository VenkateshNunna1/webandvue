function myClass(publicField, privateField, protectedField) {
  this.publicField = publicField;
  const _privateField = privateField;
  const _protectedField = protectedField;
  this.publicMethod = function () {
    console.log(`${publicField}`);
  };
  function privateMethod() {
    console.log(`${_privateField}`);
  }
  function protectedMethod() {
    console.log(`${_protectedField}`);
  }
  this.accessProtectedField = function () {
    return protectedMethod();
  };
}

const class1 = new myClass("publicfield", "privatefield", "protectedfield");
console.log(class1.publicField);
console.log(class1._privateField);
console.log(class1._protectedField);
class1.publicMethod();
// class1.privateMethod(); //error
// class1.protectedMethod(); //error
class1.accessProtectedField();

function outer() {
  let b = 9;
  function inner() {
    let a = 9;
    console.log(a + b);
  }
  inner();
}
outer();
