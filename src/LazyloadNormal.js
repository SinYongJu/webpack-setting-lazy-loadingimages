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

function LazyloadingNormal(e) {
  console.log('DOMContentLoaded')
  let lazyImages = Array.from(document.querySelectorAll('img.lazy'))
  const lazyloader = () => {
    let scrollTop = window.pageYOffset
    lazyImages.map(item => {
      //here
      if (item.offsetTop < window.innerHeight + scrollTop) {
        item.src = item.dataset.src
        item.classList.remove('lazy')
        console.log('lazy ok', item.id, window.innerHeight + scrollTop)
      }
    })
    if (lazyImages.length === 0) {
      document.removeEventListener('scroll', lazyThrottle)
      window.removeEventListener('resize', lazyThrottle)
      window.removeEventListener('orientationChange', lazyThrottle)
    }
  }
  const lazyThrottle = throttle(lazyloader)
  // throttle(() => console.log('작동중'))()
  lazyThrottle() // 시작시 화면에 따른 로딩을 위함
  document.addEventListener('scroll', lazyThrottle)
  window.addEventListener('resize', lazyThrottle)
  window.addEventListener('orientationChange', lazyThrottle)
}

/**
 *
 * throttling methods
 * @param { Function } func
 *
 */
function throttle(func) {
  let throttleTimeout
  // console.log('클로져냐?')
  return () => {
    if (throttleTimeout) {
      clearTimeout(throttleTimeout)
    }
    throttleTimeout = setTimeout(func, 10)
  }
}
document.addEventListener('DOMContentLoaded', LazyloadingNormal)

export default LazyloadingNormal
