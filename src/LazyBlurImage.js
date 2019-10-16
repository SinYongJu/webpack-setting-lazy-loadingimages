/**
 *
 * 사용자를 위한 더 나은 이미지 표시자의 사용
 *
 *  저품질의 이미지 표시자 사용
 *
 *  시용자 에게 잇어서 매끈한 전달이 가능하다
 *  
 *  체감상 부드러움
 */
function placeImgMaker(el, index, imgSrcPngArr) {
  // el.setAttribute('data-srcset', imgSrcPngArr[index])
  el.setAttribute('src', imgSrcPngArr[index].src)
  // el.classList.add(imgWidthHeightClass[index])
  // el.id = index
  return el
}
function imgRealElMaker(index, imgSrcPngArr) {
  const el = new Image()
  // el.setAttribute('data-srcset', imgSrcPngArr[index])
  el.setAttribute('src', imgSrcPngArr[index].large)
  // el.classList.add(imgWidthHeightClass[index])
  // el.id = index
  return el
}

function LazyBlurImage(el, index, imgSrcPngArr) {
  const div = document.createElement('div')

  div.className = 'container'
  div.appendChild(placeImgMaker(el, index, imgSrcPngArr))

  const imgLarge = imgRealElMaker(index, imgSrcPngArr)

  imgLarge.onload = function() {
    imgLarge.classList.add('loaded')
  }

  imgLarge.classList.add('picture')
  div.appendChild(imgLarge)
  return div
}
export default LazyBlurImage
