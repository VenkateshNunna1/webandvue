function callBackHell(callback) {
  setTimeout(() => {
    const data = "inside (callbackhell)  function";
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processeddata = `${data}  -  Processed First`;
    console.log(`Inside (firstfunc) function`);
    callback(processeddata);
  }, 1000);
}

function seocondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data}  -  Processed First`;
    console.log(`Inside (firstfunc) function`);
    callback(processedData);
  }, 1500);
}
//callbackhell//asynchronous code
callBackHell(function (data) {
  firstFunc(data, function (processedData) {
    seocondFunc(processedData, function (processedData2) {
      console.log("final result of all functions");
    });
  });
});
