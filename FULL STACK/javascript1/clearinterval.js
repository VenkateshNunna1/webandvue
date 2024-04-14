const intervalid=setInterval(function(){
    console.log("venky");
},1000);

setTimeout(function(){
    clearInterval(intervalid);
},10000);