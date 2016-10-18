# Higher-order functions, callbacks & Promises()
by funfunweird

Higher order functions are functions that take another function as an arguments.
e.g. map(), filter(), reduce() etc.

They enable us to write code with less bugs, because it is easier to reason about, and in less time, because it is easier to re-use more of our code.

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
Promises are just like callbacks, as they are a way of dealing with asynchronous code, when we are unsure of when things will happen and in what order. But Promises are more powerful than callbacks because they compose, which means they easily combine to build more complicated functions.
