# Why you should learn functional programming ?

Higher order functions are functions that take another other functions as an arguments.

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

- Enables you to write code with less bugs (easier to reason about) in less time ( easier to re-use more of your code).
