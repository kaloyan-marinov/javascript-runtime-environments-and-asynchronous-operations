const delayedLog = (message, milliseconds, cb) => {
  setTimeout(() => {
    console.log(`3 - ${new Date().toISOString()} - ${message}`);
    cb();
  }, milliseconds);
};

console.log(`1 - ${new Date().toISOString()}`);

const returnValue = delayedLog("Hello, World!", 5000, () =>
  console.log(
    `4 - ${new Date().toISOString()} - the invocation of the callback has finished`
  )
);

console.log(`2 - ${new Date().toISOString()} - returnValue=${returnValue}`);
