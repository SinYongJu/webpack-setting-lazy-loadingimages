import imgSrc from '../assets/images/bg_todo01.jpg'
import './style.css'
function component() {
  const h1 = document.createElement('H1')
  console.log(h1)
  h1.innerHTML = 'web pack setting and lazy load에 대하여'
  return h1
}
function img() {
  const image = new Image()
  image.classList.add('lazy')
  image.setAttribute('data-src', imgSrc)
  return image
}

document.body.appendChild(component())

for (let i = 0; i < 10; i++) {
  document.body.appendChild(img())
}

document.addEventListener('DOMContentLoaded', function(e) {
  const lazyImages = document.images
})

function lazyHandler(e) {
  console.log(this)
}

async function f1() {
  console.log('as')

  await setTimeout(() => {
    console.log('as2')
  }, 2000)
  await setTimeout(() => {
    console.log('as3')
  }, 5000)
}

f1()
