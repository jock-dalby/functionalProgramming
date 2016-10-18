let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.getElementById('promises').appendChild(imgElement)
}

export default addImg
