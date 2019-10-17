// 1. javascript를 통한 방법
/**
 * env condition
 *  - 동적 이미지 태그 생성
 *  - 웹팩내 번들링 이미지 여서 cdn 이미지 테스트가 필요함
 *
 * 사용 개념
 *
 *  1. Events: DOMContentLoaded, scroll, resize, orientationChange
 *  2. throttle <--- scroll resize 등 리소스를 많이 잡아 먹으며 수없이 많이 발생할 여지가 있는 이벤트들의
 *  발생을 제한하는 시간을 제공하자
 * ex) 10ms 마다 일어 나던것을 1000ms 에 캐치 할 수 있도록 하는 것
 *
 *  1. 사용시 맨 위에서 부터 읽어 내려 갈때 부드럽게 적용됨
 *  2. 다만 맨 아래 시작일 경우 전부 적용되어 다 불러와짐..
 *  3. img의 너비 높이를 세팅해 주어야 될듯 하다
 */

/*
if (
  offsetTop - window.innerHeight > scrollTop + clientHeight / 5 ||
  offsetTop + window.innerHeight < scrollTop - clientHeight / 5
) {
  item.src = ''
  item.classList.add('lazy')
} else if (
  offsetTop > window.innerHeight + scrollTop ||
  offsetTop < window.innerHeight + scrollTop
) {
  console.log(id, offsetTop + window.innerHeight, scrollTop, 'complete')
  item.src = item.dataset.src
  item.classList.remove('lazy')
}*/
const DURATION_TIME = 10

function isViewportUpSide(offsetTop, clientHeight, scrollTop) {
  return offsetTop + clientHeight < scrollTop
}
function isViewportDownSide(offsetTop, windowInnerHeight, scrollTop) {
  return offsetTop - windowInnerHeight > scrollTop
}

function updateLoadedImage(
  el,
  offsetTop,
  clientHeight,
  windowInnerHeight,
  scrollTop,
) {
  const UPSIDE = isViewportUpSide(offsetTop, clientHeight, scrollTop)
  const DOWNSIDE = isViewportDownSide(offsetTop, windowInnerHeight, scrollTop)

  if (!(UPSIDE || DOWNSIDE)) {
    //   el.src = ''
    //   el.classList.add('lazy')
    // } else {
    el.src = el.dataset.src
    el.classList.remove('lazy')
  }
}

function LazyloadingNormal(e) {
  let lazyImages = null
  const lazyloader = () => {
    lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
    let scrollTop = window.pageYOffset

    lazyImages.map(item => {
      //here
      let { offsetTop, clientHeight } = item
      let windowInnerHeight = window.innerHeight
      updateLoadedImage(
        item,
        offsetTop,
        clientHeight,
        windowInnerHeight,
        scrollTop,
      )
    }) // end
    if (lazyImages.length === 0) {
      console.log('remove')
      document.removeEventListener('scroll', lazyThrottleLoader)
      window.removeEventListener('resize', lazyThrottleLoader)
      window.removeEventListener('orientationChange', lazyThrottleLoader)
    }
  }

  const lazyThrottleLoader = throttle(lazyloader)
  // throttle(() => console.log('작동중'))()
  lazyloader()
  document.addEventListener('scroll', lazyThrottleLoader)
  window.addEventListener('resize', lazyThrottleLoader)
  window.addEventListener('orientationChange', lazyThrottleLoader)
}

/*
 if (offsetTop - window.innerHeight > scrollTop - clientHeight / 2) {
        console.log(
          '위',
          id,
          offsetTop - window.innerHeight,
          scrollTop - clientHeight,
        )
        item.src = ''
        item.classList.add('lazy')
      }
      if (offsetTop + window.innerHeight < scrollTop + clientHeight / 2) {
        console.log(
          '아래',
          id,
          offsetTop + window.innerHeight,
          scrollTop + clientHeight,
        )
        item.src = ''
        item.classList.add('lazy')
      }
*/
/**
 *
 * throttling methods
 * @param { Function } func
 *
 */
function throttle(func) {
  let throttleTimeout = null
  return () => {
    if (throttleTimeout || throttleTimeout !== null) {
      clearTimeout(throttleTimeout)
    }
    throttleTimeout = setTimeout(func, DURATION_TIME)
  }
}

export default LazyloadingNormal
