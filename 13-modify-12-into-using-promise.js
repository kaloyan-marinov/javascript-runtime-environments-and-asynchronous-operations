/*
(Many libraries already return `Promise`s
so in most cases you don't have to write this.)

For the most part,
you're going to be dealing with `Promise`s returned by libraries that you're using
rather than creating `Promise`s yourself.
(Many libraries already return `Promise`s.)

But you should also know how to create `Promise`s yourself, which is basically just:
    ```
    new Promise((resolve, reject) => {
        ...
    });
    ```
*/
const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorial = () => {
  const p = new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user has left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "user watching cat memes",
        message: "cat memes capture everyone's attention!",
      });
    } else {
      resolve("user has not left & has not gotten distracted");
    }
  });

  return p;
};

// The next instruction gets executed right away,
// because it's running on the main thread.
console.log("1");

watchTutorial()
  .then((message) => {
    console.log(`3 - [success] - ${message}`);
  })
  .catch((error) => {
    console.log(`3 - [failure] - ${error.name} - ${error.message}`);
  });

// The next instruction gets executed right away,
console.log("2");
