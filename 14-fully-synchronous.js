const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorial = (callback, errorCallback) => {
  if (userLeft) {
    errorCallback({
      name: "user has left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "user watching cat memes",
      message: "cat memes capture everyone's attention!",
    });
  } else {
    callback("user has not left & has not gotten distracted");
  }
};

console.log("1");

watchTutorial(
  (message) => {
    console.log(`2 - [success] - ${message}`);
  },
  (error) => {
    console.log(`2 - [failure] - ${error.name} - ${error.message}`);
  }
);

console.log("3");
