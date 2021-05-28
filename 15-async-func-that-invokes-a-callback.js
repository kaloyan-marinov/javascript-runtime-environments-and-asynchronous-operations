const delayedLog = (message, milliseconds, cb) => {
  setTimeout(() => {
    console.log(`${new Date().toISOString()} - ${message}`);
    cb();
  }, milliseconds);
};

const returnValue = delayedLog("Hello, World!", 5000, () =>
  console.log(`${new Date().toISOString()} - invoking callback`)
);

console.log(`${new Date().toISOString()} - returnValue=${returnValue}`);
