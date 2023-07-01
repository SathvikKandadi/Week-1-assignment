// function operation()
// {
//     console.log("ICU Set up Done");
// }
// function sleep(seconds)
// {
//     let promise=new Promise(function(resolve){
//         console.log("ICU setup Started");
//         setTimeout(resolve,seconds*1000);
//     });
//     return promise;
// }
// let pr=sleep(5);
// pr.then(operation)
function sleep(milliseconds) {
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {
      // Do nothing
    }
  }
  sleep(5000);