// filter() transforms an array into a smaller array

// From this...

var matches = []
for (var i = 0; i < arr.length; i++) {
  if (arr[i].name = 'example')
  matches.push(arr[i])
}

// to this...

var matches = arr.filter(function(i) {
  return arr.name === 'example'
})

// Filter is a higher-order function and method on the array object.  Filter will lopp through each item in the arr, for each item it is going to pass it into the callback function. Wehn it does it will expect the callback function to return either true or false to tell filter whether or not this item should be added to the matches array.

var isMatch = function(i) {
  return arr.name === 'example'
}

var matches = arr.filter(isMatch)

// reject() does the inverse of filter()
var notMatches = arr.reject(isMatch)
// find() does the same as filter but only returns the first match
var firstMatch = arr.find(isMatch)
