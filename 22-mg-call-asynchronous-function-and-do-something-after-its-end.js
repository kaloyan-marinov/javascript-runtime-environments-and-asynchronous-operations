/*
What happens if you want to call an asynchronous function,
and then do something after its execution has finished?

JavaScript does not provide a way to use `await`
to call an asynchronous function from a function that is not asynchronous itself.

This is the only case
where you are required to use the `then(...).catch(...)` syntax,
which can be used anywhere without restrictions:
*/

const createLogFunction = async () => {
  const logFunction = () => console.log("3");
  return logFunction;
};

console.log("1");

createLogFunction().then((f) => f());

console.log("2");
