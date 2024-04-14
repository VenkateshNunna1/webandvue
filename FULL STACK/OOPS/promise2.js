let isEvenorOdd = () => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is a even num`);
    } else {
      reject(`${num} is a odd num`);
    }
  });
};
const num = 8;
isEvenorOdd(num)
  .then((message) => {
    console.log(`success:${message}`);
  })
  .catch((error) => {
    console.log(`error:${error}`);
  });
