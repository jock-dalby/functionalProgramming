// Recursion is when a function calls itself until it doesn't.

let countDownFrom = (num) => {
  if(num === 0) return;
  console.log(num)
  countDownFrom(num-1)
}

countDownFrom(10)

// Example 2

let categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'simese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent) // 2. Filter through the array and find objects with parent property === null
    .forEach(c =>
      node[c.id] =
      makeTree(categories, c.id)) //
      // 3. forEach of the objects from 2. we are going to assign a new node (obj) with id from filtered results as key and value as a new makeTree function. The new makeTree function will be passed in the categories list but with animals as the parent. They will in turn will call make tree with cats and dogs etc.
  return node
}

console.log(
  JSON.stringify(
  makeTree(categories, null) // 1. When we first call makeTree we are passing in all of the categories and null as the parent value
  , null, 2)
)

// Expected output

// {
//   animals: {
//     mammals: {
//       dogs: {
//         chihuahua: null,
//         labrador: null
//       },
//       cats: {
//         persian: null,
//         siamese: null
//       }
//     }
//   }
// }
