console.log("start");
function getUserDataFromDb(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting user name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      console.log("getting user hobbies");
      const hobbies = ["reading", "playing"];
      resolve(hobbies);
    }, 2000);
  });
}

async function getUserDetails() {
  try {
    const name = await getUserDataFromDb("venkatesh");
    console.log(name);
    const hobbies = await getUserHobbies(name);
    console.log(hobbies);
  } catch (error) {
    console.log(error);
  }
}
getUserDetails();
console.log("end");
