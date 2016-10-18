var loadImage = require('./load-image-promises')
var addImg = require('./add-image-promises')

loadImagePromise('images/cat1.jpg').then((img1) => {
  addImg(img1.src)
  loadImagePromise('images/cat2.jpg').then((img2) => {
    addImg(img2.src)
    loadImagePromise('images/cat3.jpg').then((img3) => {
      addImg(img3.src)
    })
  })
})

// Promise.all() ??

Promise.all([
  loadImagePromise('images/cat1.jpg'),
  loadImagePromise('images/cat2.jpg'),
  loadImagePromise('images/cat3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
})

// Key points:

// 1.An array of promises is being passed into the all method of the promise object.

// 2.promise.all will return a new promise which we are calling then on.

// 3.We are passing in a callback to then and that callback is called with the array of actual values that the promises return. For each image, we are adding that image to the DOM.

// 4.If an error occurs in any of functions called in promise.all, it will be caught by .catch, which means we do not need to handle the error in multiple places.

// In summary, promises are, just like callbacks, a way of dealing with asynchronous code when we don't know when things are going to happen or in what order. But promises are more powerful than callbacks because they compose. promise.all is just one example of this and the promise object has alot more functionality to offer.
