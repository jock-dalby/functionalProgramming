let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.getElementById('callbacks').appendChild(imgElement)
}

export default addImg
