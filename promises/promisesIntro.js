// One of the big advantages of functional programming is writing more composible code. Callbacks are a very important part of functional programming. Callbacks are a way of telling your code 'when this thing is done, execute this piece of code'. Promises serve the same purpose as callbacks but are a bit more powerful because, unlike callbacks, they are composable.

// ES6 contains promises natively. A promise is not handled a value itself but the promise of a value. When this value arrives..... do this with it. A promise is something you can pass around and write code around it even though you do not have the value just yet.

import loadImagePromised from './load-image-promised'

// Step 1 *********************

// Example of a very basic promise (181)

loadImagePromise('images/cat1.jpg')
  .then((img) => {
    let imgElement = document.createElement('img')
    imgElement.src = img.src
    document.body.appendChild(imgElement)
  })

// Same function, but written as a callback (170)

loadImagePromise('images/cat1.jpg', (err, img) => {
  let imgElement = document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
})

// So why use promises?


// // Firstly, to make the code more explicit, we can separate out the code that adds the image element to the DOM into it's own separate function.

let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

// Promise

loadImagePromise('images/cat1.jpg')
.then(addImg(img.src))
.catch((error) => {
  // handle error later
})

// Callback

loadImageCallback('images/cat1.jpg', (err, img) => {
  if(error) throw err;
  addImg(img.src)
})
