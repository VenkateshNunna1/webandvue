console.log("start");
let getUserDataFromDb = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("geeting user name");
      resolve(name);
    }, 2000);
  });
};

let getUserHobbies = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting your hobbies");
      const hobbies = ["playing", "jumping"];
      resolve(hobbies);
    }, 2000);
  });
};
console.log("stop");

getUserDataFromDb("venkatesh")
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  });

getUserHobbies("venkatesh")
  .then((hobby) => {
    console.log(hobby);
  })
  .catch((error) => {
    console.log(error);
  });
