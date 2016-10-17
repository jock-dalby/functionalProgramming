# Why you should learn functional programming ?

Higher order functions are functions that take other functions as their arguments.

- Enables you to write code with less bugs (easier to reason about) in less time ( easier to re-use more of your code).

In all programming languages, functions are values but not all programming languages allow you to create an anonymous function and assign it to a variable or passed into other variables or functions.

```js

var triple = triple(x) {
  return x * 3
}

var waffle = triple

waffle(30) // Returns 90
```
The fact that Javascript allows us to pass functions into other functions means we are able to easily break a problem down into smaller pieces and compose them together using higher-order functions.
