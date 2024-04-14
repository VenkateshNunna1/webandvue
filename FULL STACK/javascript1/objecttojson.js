const person = {
  firstName: "venkatesh",
  lastName: "nunna",
  age: 19,
  email: "venky@2001",
  isSubscribed: true,
  hobbies: ["playing", "reading"],
  address: {
    city: "chirala",
    idk: true,
  },
};

let json_obj = JSON.stringify(person);
console.log(json_obj);
let js_obj = JSON.parse(json_obj);
console.log(js_obj);
