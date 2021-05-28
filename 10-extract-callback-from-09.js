const logImmediately = (text, cb) => {
  cb(text);
};

console.log("1");

logImmediately("2", (t) => {
  console.log(t);
});

console.log("3");
