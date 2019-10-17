import LazyloadingNormal from '../LazyloadNormal'
import LazyObserver from '../LazyObserver'
import '../style.css'
import { fetchImages } from './images'

/**
 *
 *
 *
 */

const isTest = true // 테스트 환경일때 변경 요망
const CLASS_LAZY = 'lazy'
const h1 = title => {
  const h1 = document.createElement('h1')
  h1.innerHTML = title
  return h1
}
const pixabaylogo = () => {
  const logoAttr = {
    src: 'https://pixabay.com/static/img/public/medium_rectangle_a.png',
    alt: 'Pixabay',
    style: 'width:100px;height:auto',
  }
  const logo = img()
  logo.src = logoAttr.src
  logo.alt = logoAttr.alt
  logo.style = logoAttr.style
  return logo
} // logo라 일단

const draw = (target, ...elements) => {
  let drawTarget = document.body
  if (target.length) {
    drawTarget = document.querySelector(target)
  }
  Array.from(elements).map(el => {
    drawTarget.appendChild(el)
  })
}

const img = attrs => {
  const imgEl = new Image()
  imgEl.alt = ''
  if (attrs) {
    let { width, height, alt } = attrs
    imgEl['width'] = width
    imgEl['height'] = height
    imgEl['alt'] = alt
    if (!isTest) {
      imgEl.dataset.src = attrs['data-src']
      imgEl.dataset.prev = attrs['data-prev']
      imgEl.classList.add(CLASS_LAZY)
    } else {
      imgEl.src = attrs['data-src']
      imgEl.prev = attrs['data-prev']
    }
  }
  return imgEl
}

const drawImages = () => {
  fetchImages()
    .then(data => {
      const images = data.map(item => img(item))
      return images
    })
    .then(images => draw('#gallery', ...images))
    .then(() => {
      if (!isTest) {
        lazyLoader()
      }
    })

  //
}
const lazyLoader = () => {
  if (!'IntersectionObserver' in window) {
    LazyObserver()
  } else {
    LazyloadingNormal()
  }
}

const init = () => {
  const title = h1('Lazy loading Test')
  const logo = pixabaylogo()
  draw('#header', title, logo)
  drawImages()

  // document.addEventListener('DOMContentLoaded', lazyLoader)
}

init()
