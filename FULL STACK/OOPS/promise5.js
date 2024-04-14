console.log("start");

let getUserDataFromDb = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting user name");
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

Promise.all([getUserDataFromDb("venkatesh"), getUserHobbies("venkatesh")])
  .then(([name, hobbies]) => {
    console.log(name);
    console.log(hobbies);
  })
  .catch((error) => {
    console.log(error);
  });
