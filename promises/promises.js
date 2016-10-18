/********** Promises ***************/

let addImgPR = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.getElementById('promises').appendChild(imgElement)
}

function loadImagePR(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      let msg = 'Could not load image at ' + url
      reject(new Error(msg))
    }

    image.src = url
  })
}

// Key points:

// 1. The promise constructor takes a single function as it's argument.
// 2. This function promise function be called with two arguments, resolve and reject.
// 3. Both resolve (success) and reject (failure) are also functions and which are called //    with the value or error, if and  when you have them.

loadImagePR(catAPI).then((img1) => {
  addImgPR(img1.src)
  loadImagePR(catAPI).then((img2) => {
    addImgPR(img2.src)
    loadImagePR(catAPI).then((img3) => {
      addImgPR(img3.src)
    })
  })
})

// Promise.all()

Promise.all([
  loadImagePR(catAPI),
  loadImagePR(catAPI),
  loadImagePR(catAPI)
]).then((images) => {
  images.forEach(img => addImgPR(img.src))
}).catch((err) => {
  console.log('err', err)
})

// Key points:
// 1.An array of promises is being passed into the all method of the promise object.

// 2.promise.all will return a new promise which we are calling then on.

// 3.We are passing in a callback to then and that callback is called with the array of actual values that the promises return. For each image, we are adding that image to the DOM.

// 4.If an error occurs in any of functions called in promise.all, it will be caught by .catch, which means we do not need to handle the error in multiple places.

// 5.Promise.all is just one example of this and the promise object has alot more functionality to offer.
