function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      if (b != 0) {
        const division = a / b;
        console.log(division);
        resolve(division);
      } else {
        reject("cannot divide with zero");
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    if (random == 1) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }, 1000);
    } else {
      reject("failed to connect to backend");
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
makeCalculation(10, 5)
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
