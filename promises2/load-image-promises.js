
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function() {
      resolve(null, image)
    }

    image.onerror = function() {
      let message = 'Could not load image at ' + url
      reject(new Error(msg))
    }

    image.src = url
  })
}

export default loadImage

// Key points:

// 1. The promise constructor takes a single function as it's argument.

// 2. This function promise function be called with two arguments, resolve and reject.

// 3. Both resolve (success) and reject (failure) are also functions and js wants you to call these functions with the values when you have them, or the error if you get one.
