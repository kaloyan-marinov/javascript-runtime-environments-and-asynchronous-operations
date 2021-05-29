/*
This file enhances the definition of the `delayedLog` function.
*/

const delayedLog = (message, milliseconds) => {
  const p = new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject("timeout cannot be negative!");
    } else {
      setTimeout(() => {
        console.log(`[not run] - ${new Date().toISOString()} - ${message}`);
        resolve();
      }, milliseconds);
    }
  });

  return p;
};

console.log(`1 - ${new Date().toISOString()}`);

const returnValue = delayedLog("Hello, World!", -5000).then(() =>
  console.log(
    `3 - ${new Date().toISOString()} - the invocation of the callback has finished`
  )
);

console.log(`2 - ${new Date().toISOString()} - returnValue=${returnValue}`);
