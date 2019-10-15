import imgSrc1 from '../assets/images/bg_todo01.jpg'
import imgSrc2 from '../assets/images/bg_todo02.jpg'
import imgSrc3 from '../assets/images/bg_todo03.jpg'
import imgSrc4 from '../assets/images/bg_todo04.jpg'
import imgSrc5 from '../assets/images/bg_todo05.jpg'
import LazyloadingNormal from './LazyloadNormal'
import './style.css'

const imgSrcArr = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5]
function component() {
  const h1 = document.createElement('H1')
  console.log(h1)
  h1.innerHTML = 'web pack setting and lazy load에 대하여'
  return h1
}
function img() {
  const image = new Image()
  image.classList.add('lazy')
  return image
}

document.body.appendChild(component())
for (let i = 0; i < 50; i++) {
  document.body.appendChild(
    (() => {
      let imgI = img()
      imgI.setAttribute('data-src', imgSrcArr[i % 4])
      imgI.id = i
      return imgI
    })(),
  )
}
/*
  <img> 태그에서 이미지를 지연 로딩하는 일반적인 개념

  브라우저에서 img의 src에 값이 들어 오는 순간 개수에 상관없이 
  img 로드를 시행한다 그러므로 

  1. src 속성 값 비워두기 
  ㄴ 대체제로 data-src 로 대체한다
  2. 이미지에게 뷰포트에 들어가자 마자 로드 될 수 있도록 트리거 하려는 요소가 필요합니다 
*/
LazyloadingNormal()
