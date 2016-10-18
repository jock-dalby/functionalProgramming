// One of the big advantages of functional programming is writing more composible code. Callbacks are a very important part of functional programming. Callbacks are a way of telling your code 'when this thing is done, execute this piece of code'. Promises serve the same purpose as callbacks but are a bit more powerful because, unlike callbacks, they are composable.

// ES6 contains promises natively

import loadImagePromised from './load-image-promised'

// Step 1 *********************

// Example of a very basic promise

loadImagePromise('images/cat1.jpg')
.then((img) => {
  let imgElement = document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
})

// Same function as a callback

loadImagePromise('images/cat1.jpg', (err, img) => {
  let imgElement = document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
})

// Step 2 *********************

// Separate out the code that adds the image element to the DOM into it's own separate function.

let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

// Promise

loadImagePromise('images/cat1.jpg')
.then(addImg(img.src))

// Callback

loadImageCallback('images/cat1.jpg', (err, img) => {
  addImg(img.src)
})


// Step 3 *********************

// Callback - The node.js christmas callback tree of doom!

loadImageCallback('images/cat1.jpg', (err, img1) => {
  if(error) throw err;
  addImg(img1.src)
  loadImageCallback('images/cat2.jpg', (err, img2) => {
    if(error) throw err;
    addImg(img2.src)
    loadImageCallback('images/cat3.jpg', (err, img3) => {
      if(error) throw err;
      addImg(img3.src)
    })
  })
})



loadImagePromise('images/cat1.jpg').then((img1) => {
  addImg(img1.src)
  loadImagePromise('images/cat2.jpg').then((img2) => {
    addImg(img2.src)
    loadImagePromise('images/cat3.jpg').then((img3) => {
      addImg(img3.src)
    })
  })
})

// Promise.all

Promise.all([
  loadImagePromise('images/cat1.jpg')
  loadImagePromise('images/cat2.jpg')
  loadImagePromise('images/cat3.jpg')
]).then((images) => {
  console.log(images)
  images.forEach( img => addImg(img.src))
})
