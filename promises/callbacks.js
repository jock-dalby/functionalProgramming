/********** Callbacks ***************/

// addImg
let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.getElementById('callbacks').appendChild(imgElement)
}

// loadImage
function loadImage(url, callback) {
  let image = new Image()

  image.onload = function() {
    callback(null, image)
  }

  image.onerror = function() {
    let msg = 'Could not load image at ' + url
    callback(new Error(msg))
  }

  image.src = url
}

// call loadImage
loadImage('images/cat1.jpg', (err, img1) => {
  if(err) throw err;
  addImg(img1.src)
  loadImage('images/cat2.jpg', (err, img2) => {
    if(err) throw err;
    addImg(img2.src)
    loadImage('images/cat3.jpg', (err, img3) => {
      if(err) throw err;
      addImg(img3.src)
    })
  })
})

// could we use map()

let arr = [
  'images/cat1.jpg',
  'images/cat2.jpg',
  'images/cat3.jpg'
  ]

arr.map(img => loadImage(img, (err, img1) => {
  if(err) throw err;
  addImg(img1.src)
}))

// What if we use promises ??? split-right
