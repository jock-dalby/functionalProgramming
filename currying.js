// currying is when a function doesn't take all of it's arguments upfront. Instead, it wants you to give it the first argument returns a second function, which you then call with the second argument, and so, until all the arguments have been provided. The function at the end of the chain is the one which will return the value you want.

let dragon =
  name => // dragon calls a function with name argument
    size => // which calls a function with size argument
      element => // which calls a function with element argument
        name + ' is a ' + // which returns the result
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon('fluffykins')('tiny')('lightning'))

// To run $npm run start-two

// The idea with currying is you function can pass through the application and gradually recieve the arguments that it needs. Example:

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')
console.log(tinyDragon('lightning'))
