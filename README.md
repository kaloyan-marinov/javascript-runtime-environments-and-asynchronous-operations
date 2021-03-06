# Introduction

The first few TXT files talk about two _JavaScript Runtime Environment_s: a web browser and Node.js. The components of each is defined and its responsibilites are described.

The last few TXT files define what an asynchronous operation is, list the only native functions of the JavaScript language to execute code asynchronously, and lists multiple ways of managing asynchronous operations.

The JS files provide examples, each of which can be executed by issuing `node <filename>`.

# According to the Merriam-Webster Dictionary

1. Common language

    - _concurrent_: operating or occurring at the same time

    - _synchronous_: happening, existing, or arising at precisely the same time

    - _asynchronous_: not simultaneous or concurrent in time : not synchronous

2. In the context of digital communications

    - _synchronous_: of, used in, or being digital communication (as between computers) in which a common timing signal is established that dictates when individual bits can be transmitted and which allows for very high rates of data transfer

    - _asynchronous_: of, used in, or being digital communication (as between computers) in which there is no timing requirement for transmission and in which the start of each character is individually signaled by the transmitting device

# According to https://eloquentjavascript.net/11_async.html

In a _synchronous_ programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished... This stops your program for the time the action takes.

An _asynchronous_ model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).



# Bibliography

https://www.javascripttutorial.net/javascript-event-loop/

http://dolszewski.com/javascript/javascript-runtime-environment/

https://medium.com/joonsikyang/javascript-engine-and-runtime-253f84772dc

https://en.wikipedia.org/wiki/Node.js >> 1st sentence

What the heck is the event loop anyway? | Philip Roberts | JSConf EU
Oct 9, 2014

https://developer.mozilla.org/en-US/docs/Web/API

https://stackoverflow.com/questions/29027845/what-is-the-difference-between-javascript-engine-and-javascript-runtime-environm

"JavaScript Promises - Mastering the asynchronous"

the (Callback vs Promise vs Async-Await) article by GoFrendi Gunawan

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

the (The Async Await Episode I Promised) tutorial by Fireship

the (JavaScript Promises In 10 Minutes) tutorial by Web Dev Simplified

the (Introduction to JavaScript Promises) blog post by Miguel Grinberg

---

https://dev.to/johnjardincodes/increase-node-js-performance-with-libuv-thread-pool-5h10

https://medium.com/softup-technologies/node-js-internals-not-everything-happens-on-the-thread-pool-a14d0a286efb

---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

# Advanced aspects of JavaScript Runtime Environments

If you have worked through all of this repository's files, you should now be able to follow and understand more advanced aspects of JavaScript Runtime Environments such as the ones presented below.

[TODO: add 2021/05/30/10_30/advanced-aspects-of-javascript-runtime-environments/]