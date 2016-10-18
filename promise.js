import loadImage from './load-image-promise'


let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImagePromise('images/cat1.jpg')
  loadImagePromise('images/cat2.jpg')
  loadImagePromise('images/cat3.jpg')
]).then((images) => {
  images.forEach( img => addImg(img.src))
}).catch((error) => {
  // handle error later
})
