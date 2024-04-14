console.log("start");
let getUserDataFromDb = (name, callback) => {
  setTimeout(() => {
    console.log("getting user name....");
    callback(name);
  }, 2000);
};

let getUserHobbies = (name, callback) => {
  setTimeout(() => {
    console.log("getting user hobbies...");
    let hobbies = ["playing", "reading", "writing"];
    callback(name, hobbies);
  }, 2000);
};

getUserDataFromDb("venkatesh", function (name) {
  console.log(name);
  getUserHobbies(name, function (name, hobbies) {
    console.log(name);
    console.log(hobbies);
  });
});

console.log("end");
