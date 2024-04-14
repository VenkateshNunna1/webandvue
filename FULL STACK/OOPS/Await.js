function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user data retrived from the server...");
    }, 2000);
  });
}
async function getUserData() {
  try {
    console.log("venkatesh");
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("remaining task can be executed here");
  } catch (error) {
    console.log(error);
  }
}
getUserData();
