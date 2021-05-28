/*
Nothing here has any actual time delay
so, f one is inexperienced with executing _generalized JavaScript programs_
in a _JavaScript Runtime Environment_,
one might easily think that
each line of code would be executed one by one.
But that's not what happens.
*/

// The next instruction gets executed right away,
// because it's running on the main thread.
console.log("1");

// The next instruction gets queued for a future task.
setTimeout(() => {
  console.log("4");
}, 0);

// A `Promise` that resolves right away
// ... gets queued to run in the microtask queue, immediately after this current task.
Promise.resolve().then(() => {
  console.log("3");
});

// The next instruction gets executed right away,
console.log("2");
