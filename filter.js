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

// Filter accepts one arguement - another function. Functions you send into other functions are called 'callback' functions. Filter will lopp through each item in the arr, for each item it is going to pass it into the callback function. Wehn it does it will expect the callback function to return either true or false to tell filter whether or not this item should be added to the matches array.

var isMatch = function(i) {
  return arr.name === 'example'
}

var matches = arr.filter(isMatch)

// Reject() -A higher-order function that does the inverse of filter()
var notMatches = arr.reject(isMatch)
