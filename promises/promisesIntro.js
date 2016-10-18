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
  console.error('uh oh: ', error);   // 'uh oh: something bad happened’
})

// Callback

loadImageCallback('images/cat1.jpg', (err, img) => {
  if (err) throw err;
  addImg(img.src)
})
