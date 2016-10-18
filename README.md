# Higher-order functions, callbacks & Promises()
by funfunweird

Higher-order functions is a fancy word for a function that accepts another function as an argument e.g. map(), filter(), reduce() etc.

Higher-order functions enable us to write code with less bugs (because it is easier to reason about) and in less time (because it is easier to re-use more of our code).

Functions that are passed to another function as an argument are called 'callback' functions.

```js
                Higher-     callback
                order       function
                function      ||
                    ||        ||
                    \/        \/
var matches = arr.filter(function(i) {
  return arr.name === 'example'
})
```
Promises are just like callbacks, as they are a way of dealing with asynchronous code, when we are unsure of when things will happen and in what order.

Big word alert! - Synchronous code executes in order. First you do step 1, then you do step 2, then you do step 3.

Asynchronous code may be executed at the same time, out of order, or at least before other steps have fully completed.

A promise represents a value which may be available now, or in the future, or never. Promises are more powerful than callbacks because they compose, which means they can easily be combined to build larger, more complicated functions.

A Promise is always in one of these 3 states:

- pending: initial state, not fulfilled or rejected.
- fulfilled: meaning that the operation completed successfully by retrieving a value.
- rejected: meaning that the operation failed by retrieving an error message.

#.then()
The primary method of a promise is its '.then' method, which registers callbacks to receive either the eventual value or the reason why the promise cannot be fulfilled.

Here is a simple “hello world” program that synchronously obtains and logs a greeting.
```js
var greeting = sayHello();
console.log(greeting);    // 'hello world’
```
However, if sayHello is asynchronous and needs to look up the current greeting from a web service, it may return a promise:
```js
var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    console.log(greeting);    // 'hello world’
});
```
The same message will be printed to the console, but now other code can continue while the greeting is being fetched.

A promise can also represent a failure. If the network goes down and the greeting can’t be fetched from the web service, you can register to handle the failure using the second argument to the promise’s then method:
```js
var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    console.log(greeting);    // 'hello world’
}, function (error) {
    console.error('uh oh: ', error);   // 'uh oh: something bad happened’
});
```
If sayHello succeeds, the greeting will be logged, but if it fails, then the reason, i.e. error, will be logged using console.error.

A function passed to .then can also return another promise. This allows asynchronous operations to be chained together, so that they are guaranteed to happen in the correct order.

```js
var greetingPromise = sayHello();
greetingPromise
    .then(addExclamation)
    .then(function (greeting) {
        console.log(greeting);    // 'hello world!!!!’
    }, function(error) {
        console.error('uh oh: ', error);   // 'uh oh: something bad happened’
    });
```
Notice you can use a single error handling block, in this case passed as the second parameter to the final call to then.
