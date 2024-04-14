console.log("start");
let getUserDataDB = (name, callback) => {
  setTimeout(() => {
    console.log("Getting User Name");
    callback(name);
  }, 2000);
};

let getUserHobbies = (name, callback) => {
  setTimeout(() => {
    console.log("Getting User Hobbies.......");
    let hobbies = ["reading", "playing"];
    callback(hobbies, name);
  }, 2000);
};

getUserDataDB("venkatesh", (name) => {
  console.log(name);
  getUserHobbies("ganesh", (hobbies, name) => {
    console.log(hobbies, name);
  });
});
console.log("end");
