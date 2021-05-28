/*
This file enhances the definition of the `delayedLog` function.
*/

const delayedLog = (message, milliseconds) => {
  const p = new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject("timeout cannot be negative!");
    } else {
      setTimeout(() => {
        console.log(`${new Date().toISOString()} - ${message}`);
        resolve();
      }, milliseconds);
    }
  });

  return p;
};

const returnValue = delayedLog("Hello, World!", -5000).then(() =>
  console.log(`${new Date().toISOString()} - invoking callback`)
);

console.log(`${new Date().toISOString()} - returnValue=${returnValue}`);
