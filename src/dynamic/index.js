import LazyloadingNormal from '../LazyloadNormal'
import LazyObserver from '../LazyObserver'
import '../style.css'
import { fetchImages } from './images'

/**
 *
 *
 *
 */
const isTest = !true
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

const img = className => {
  const imgEl = new Image()
  imgEl.alt = ''
  if (className) imgEl.classList.add(className)
  return imgEl
}

const setLazyImg = attrs => {
  const imgEl = img()
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
  return imgEl
}

/*
  여기서 부터 미디어 블러 처리 
*/
/**
 *
 * @param {string} className : class name
 */
const div = className => {
  const div = document.createElement('div')
  if (className) div.classList.add(className)
  return div
}

const setMediumLazyImgContainer = attrs => {
  let { width, height, alt } = attrs
  const container = div('container')
  const placeholder = img('placeholder')
  const picture = img('picture')
  placeholder.src = attrs['data-prev']
  placeholder['width'] = width
  placeholder['height'] = height
  picture.src = attrs['data-src']
  picture.alt = alt
  picture.onload = () => {
    picture.classList.add('loaded')
  }
  container.appendChild(picture)
  container.appendChild(placeholder)
  return container
  // return container
}

const setTestMediumLazyImgContainer = attrs => {
  let { width, height, alt } = attrs
  const container = div('container')
  const picture = img('')
  picture.src = attrs['data-src']
  picture['width'] = width
  picture['height'] = height
  picture.alt = alt
  container.appendChild(picture)
  return container
}
/**
 *
 * @param {function} func : 생성하려는 컴포넌트 함수를 넣는다
 * @param {string} keywords : 불러올 이미지 검색 키워드
 *
 */
const drawImages = (func, keywords) => {
  fetchImages(keywords)
    .then(data => {
      return data
    })
    .then(data => data.map(item => func(item)))
    .then(images => draw('#gallery', ...images))
    .then(() => !isTest && lazyLoader())
    .then(() => console.log('drawimages'))
}

const lazyLoader = () => {
  // 브라우저 로드에 대한 설정이 필요 할듯 하다
  if ('IntersectionObserver' in window) {
    LazyObserver()
  } else {
    LazyloadingNormal()
  }
}

const init = () => {
  const title = h1('Lazy loading Test')
  const logo = pixabaylogo()
  // const div = setMediumLazyImgContainer()

  draw('#header', title, logo)
  // draw('#gallery', div)
  // drawImages(setLazyImg)
  drawImages(setLazyImg)
  // if (isTest) {
  //   drawImages(setTestMediumLazyImgContainer, '')
  // } else {
  //   drawImages(setMediumLazyImgContainer, '')
  // }

  /**
   *
   * ui event에 대하여 공부 필요
   *
   * document.addEventListener('DOMContentLoaded', () => {
   * console.log('실행')
   * })
   *
   */
  // window.addEventListener('DOMContentLoaded', () => {
  //   console.log('실행 돔')

  // })
  // window.addEventListener('load', () => {
  //   console.log('실행')
  //   lazyLoader()
  // })
}

init()
