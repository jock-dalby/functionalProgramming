// Reduce is not limited to reducing a list to a number, it can reduce it to anything.

// Here is an example of other ways reduce can be used and how well higher-order functions compose together.

// Very useful for shopping cart projects!!! The chainability of the functions below is something you will see alot of while using functional programming. This chain means each function only needs to do one thing and then bind them all together.

var fs = require('fs')

var output = fs.readFileSync('reduce/advanced/data.txt', 'utf8')
  .trim() // trim removes any line breaks or spaces at the start or end of the .txt script
  .split('\n') // split is a method on the string object which splits the string into an array. '/n' represents a line break, so each item in the array represents a line.
  .map(line => line.split('  ')) // Loops through each item in the array and splits it into an array where each item is seperated where there is more than one space gap. Not ideal and error prone but .split('\t') is meant to work for splitting where tabs occur but cannot get it wokring
  .reduce((people, line) => {
    people[line[0]] = people[line[0]] || [] // We are re-using the existing array if one exists, otherwise we are creating a new one
    people[line[0]].push({
    item: line[1],
    cost: line[2],
    quantity: line[3]
  })
  return people
}, {})

// The first argument passed to the reduce callback function is the object/item(s) we are constructing. The second item represents a single item in the array we are iterating through.

console.log('output ', JSON.stringify(output, null, 2)) // create a JSON string from the output with 2 spaces for indentation
