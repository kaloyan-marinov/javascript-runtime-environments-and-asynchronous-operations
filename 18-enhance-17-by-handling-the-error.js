/*
This file does not change the definition of the `delayedLog` function,
but enhances the manner in which that function is called.
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

// Example 1 - enhance "3" by handling the error
const returnValue1 = delayedLog("Hello, World!", -5000)
  .then(() => console.log(`${new Date().toISOString()} - invoking callback`))
  .catch((error) =>
    console.log(
      `${new Date().toISOString()} - example 1 - An error has occurred: ` +
        error
    )
  );

console.log(
  `${new Date().toISOString()} - example 1 - returnValue1=${returnValue1}`
);

// Example 2 - create a "function chain"
//             without any errors in the chain
const returnValue2 = delayedLog("example 2 - first", 1000)
  .then(() => delayedLog("example 2 - second", 2000))
  .then(() => delayedLog("example 2 - third", 3000))
  .then(() => delayedLog("example 2 - fourth", 4000))
  .catch((error) =>
    console.log(
      `${new Date().toISOString()} - example 2 - An error has occurred: ` +
        error
    )
  );

console.log(
  `${new Date().toISOString()} - example 2 - returnValue2=${returnValue2}`
);

// Example 3 - create a "function chain"
//             with an error ocurring in the middle of the chain
const returnValue3 = delayedLog("example 3 - first", 1000)
  .then(() => delayedLog("example 3 - second", 2000))
  .then(() => delayedLog("example 3 - third", -3000))
  .then(() => delayedLog("example 3 - fourth", 4000))
  .catch((error) =>
    console.log(
      `${new Date().toISOString()} - example 3 - An error has occurred: ` +
        error
    )
  );

console.log(
  `${new Date().toISOString()} - example 3 - returnValue3=${returnValue3}`
);
