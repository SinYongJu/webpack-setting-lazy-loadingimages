import imgSrc1 from '../assets/images/bg_todo01.jpg'
import imgSrc2 from '../assets/images/bg_todo02.jpg'
import imgSrc3 from '../assets/images/bg_todo03.jpg'
import imgSrc4 from '../assets/images/bg_todo04.jpg'
import imgSrc5 from '../assets/images/bg_todo05.jpg'
import LazyloadingNormal from './LazyloadNormal'
import LazyObserver from './LazyObserver'
import './style.css'

const IS_TEST = true
const lOAD_DATA_LENGTH = 100
const imgSrcArr = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5]
const imgWidthHeightClass = [
  'img_500x200',
  'img_400X150',
  'img_120X60',
  'img_1000X500',
  'img_2000X1000',
]

function componentH1() {
  const h1 = document.createElement('H1')
  h1.innerHTML = 'web pack setting and lazy load에 대하여'
  return h1
}

function img() {
  const image = new Image()
  image.classList.add('lazy')
  return image
}

function imgElMaker(el, index, imgSrcArr, imgWidthHeightClass) {
  if (!index || !imgSrcArr || !imgWidthHeightClass) {
    index = 0
    imgSrcArr = [imgSrc2]
    imgWidthHeightClass = ['img_500x200']
  }
  el.setAttribute('data-src', imgSrcArr[index])
  el.classList.add(imgWidthHeightClass[index])
  el.id = index
  return el
}

/*
  <img> 태그에서 이미지를 지연 로딩하는 일반적인 개념

  브라우저에서 img의 src에 값이 들어 오는 순간 개수에 상관없이 
  img 로드를 시행한다 그러므로 

  1. src 속성 값 비워두기 
  ㄴ 대체제로 data-src 로 대체한다
  2. 이미지에게 뷰포트에 들어가자 마자 로드 될 수 있도록 트리거 하려는 요소가 필요합니다 
*/

function init() {
  document.body.appendChild(componentH1())
  for (let i = 0; i < lOAD_DATA_LENGTH; i++) {
    if (!IS_TEST) {
      document.body.appendChild(
        imgElMaker(img(), i % 5, imgSrcArr, imgWidthHeightClass),
      )
    } else {
      document.body.appendChild(imgElMaker(img()))
    }
  }
  document.addEventListener('DOMContentLoaded', lazyLoader)

  /**
   *
   * 모던 브라우저의 IntersectionObserver 가 있을 경우 IntersectionObserver을 사용
   * 그밖에는 스크롤 및 다른 이벤트 적용
   */
}
init()

// LazyloadingNormal()
// document.addEventListener('DOMContentLoaded', LazyloadingNormal)
function lazyLoader() {
  // if ('IntersectionObserver' in window) {
  //   LazyObserver()
  // } else {
  //   LazyloadingNormal()
  // }

  LazyloadingNormal()
}
