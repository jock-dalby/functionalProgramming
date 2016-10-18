/********** Promises ***************/

// addImg
let addImgPR = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.getElementById('promises').appendChild(imgElement)
}

// loadImage
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

// 1. The promise constructor takes a single function as it's argument.
// 2. This function takes two arguments, resolve and reject.
// 3. Both resolve (success) and reject (failure) are also functions which are called with either the value or the error, if and when you have them.

loadImagePR('images/cat1.jpg').then((img1) => {
  addImgPR(img1.src)
  loadImagePR('images/cat2.jpg').then((img2) => {
    addImgPR(img2.src)
    loadImagePR('images/cat3.jpg').then((img3) => {
      addImgPR(img3.src)
      .catch() {
        console.error('uh oh: ', error);   // 'uh oh: something bad happened’
      }
    })
  })
})

// Promise.all() - Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects.

Promise.all([
  loadImagePR('images/cat1.jpg'),
  loadImagePR('images/cat2.jpg'),
  loadImagePR('images/cat3.jpg')
]).then((images) => {
  images.forEach(img => addImgPR(img.src))
}).catch((err) => {
  console.log('err', err)
})

// If an error occurs in any of functions called in promise.all, it will be caught by .catch, which means we do not need to handle the error in multiple places.
