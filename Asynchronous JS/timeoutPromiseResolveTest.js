function timeoutPromiseResolve(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("successful");
      }, interval);
    });
  };
  
  function timeoutPromiseReject(interval) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        reject("error");
      }, interval);
    });
  };
  
  async function timeTest() {
    const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
    const timeoutPromiseReject2 = timeoutPromiseReject(2000);
    const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);
  
    await timeoutPromiseResolve1;
    await timeoutPromiseReject2;
    await timeoutPromiseResolve3;
  }
  
  let startTime = Date.now();
  timeTest().then(() => {
  }).catch(e => {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
  })