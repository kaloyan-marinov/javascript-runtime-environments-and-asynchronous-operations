/*
If one is inexperienced with executing _generalized JavaScript programs_
in a _JavaScript Runtime Environment_,
one might easily think that
each line of code would be executed one by one.
But that's not what happens.
*/

// The next instruction gets executed right away,
// because it's running on the main thread.
console.log("1");

// The next instruction gets added to the _Macrotask Queue_.
setTimeout(() => {
  console.log("3");
}, 0);

// The next instruction gets executed right away.
console.log("2");
