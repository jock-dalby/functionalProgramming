// reduce() can be used to express any list transformation (including filter, find, map and reject).

// From this...

var totalAmount = 0
for (var i = 0; i < arr.length; i++) {
  totalAmount += arr[i].amount
}

// to this...

var totalAmount = arr.reduce(function(sum, i) {
  return sum + i.amount
}, 0)

// ES6

var totalAmount = arr.reduce((sum, i) => sum + i.amount, 0)

// The sum starts at 0 because we are passing 0 as the starting value as the second argument after the callback function.

// The sum from the first iteration of reduce is then passed to the second iteration of reduce.
