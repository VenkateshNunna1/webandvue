// const data = fetch("text.txt");
// console.log(data);// it will give the output promise is in pending state
//there are three ways to handle
//1)callback
//2)new promises
//3)Async

//-----promises--------------

fetch("text.txt")
  .then((res) => {
    console.log(res);
    return res.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
