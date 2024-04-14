function isEvenorOdd(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is a even number`);
    } else {
      reject(`${number} is a odd .number`);
    }
  });
}

const num = 8;
isEvenorOdd(num)
  .then((message) => {
    console.log(`success:${message}`);
  })
  .catch((error) => {
    console.log(`${error}`);
  });
