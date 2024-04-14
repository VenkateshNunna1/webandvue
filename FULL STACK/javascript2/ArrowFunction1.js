setTimeout(() => {
  console.log("hello");
  setTimeout(() => {
    console.log("hey");
    setTimeout(() => {
      console.log("namaste");
      setTimeout(() => {
        console.log("hi");
        setTimeout(() => {
          console.log("bonjur");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
