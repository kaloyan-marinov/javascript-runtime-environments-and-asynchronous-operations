const computeSum = async (a, b) => {
  console.log("2");
  return a + b;
};

console.log("1");

computeSum(10, 10).then((sum) => console.log(`4 - the sum is ${sum}`));

console.log("3");
