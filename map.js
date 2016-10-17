// Map is a higher-order function which loops through an array and transforms the values.

// From this...
var results = []
for (var i = 0; i < arr.length; i ++) {
  results.push(arr[i].name)
}

// to this...
var results = arr.map(function (i) {
  return i.name
})

// ES6 arrow functions
var results = arr.map((i) => i.name)

// map() takes a callback function which is passed each item in the array. Where filter expects a boolean value to be returned from the callback, map() will include a transformed value of the original item. This can be used to return a subset of the original array or a completely new array.

var results = arr.map(function (i) {
  return 'Hello, my name is ' + i.name + 'and my address is ' + i.address
})
