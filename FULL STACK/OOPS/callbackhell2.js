console.log("start");
function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("Getting User Name.....");
    callback(name);
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting user hobbies....");
    const hobbies = ["cricket", "books"];
    callback(hobbies);
  }, 2000);
}

getUserDataFromDB("venkatesh", (name) => {
  console.log(name);
  getUserHobbies(name, function (hobbies) {
    console.log(hobbies);
  });
});
console.log("end");
