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

const test = async () => {
  try {
    await delayedLog("_refactored_ example 3 - first", 1000);
    await delayedLog("_refactored_ example 3 - second", 2000);
    await delayedLog("_refactored_ example 3 - third", -3000);
    await delayedLog("_refactored_ example 3 - fourth", 4000);
  } catch (error) {
    console.log(
      `${new Date().toISOString()} - _refactored_ example 3 - An error has occurred: ` +
        error
    );
  }
};

console.log(`${new Date().toISOString()} - STARTING`);

test();

console.log(`${new Date().toISOString()} - ENDING`);
