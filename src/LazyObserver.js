//Using Intersection Observer API to trigger image loads

/**
 * . API가 isIntersecting속성을 사용하여 요소가 뷰포트에 들어간 것을 감지하면 속성에서 URL을 선택하고 이를 브라우저 의 속성으로 이동
 *  하여 이미지로드를 트리거합니다. 이 작업이 완료되면 이미지에서 게으른 클래스를 제거하고 해당 이미지에서 관찰자를 제거합니다.
 *
 * 1. 숫자 계산 안해도 된다
 *
 * 단점 :
 *  브라우저를 탄다
 *
 * 개념 : IntersectionObserver
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * The Intersection Observer API lets code register a callback function that is executed whenever an
 *  element they wish to monitor enters or exits another element (or the viewport), or when the amount
 * by which the two intersect changes by a requested amount. This way, sites no longer need to do anything on
 * the main thread to watch for this kind of element intersection, and the browser is free to optimize
 * the management of intersections as it sees fit.
 */

// function LazyObserver() {
//   let count = 0
//   console
//   return (() => {
//     const lazyImages = document.querySelectorAll('img.lazy')
//     const imgObserber = new IntersectionObserver(observerHandler)
//     Array.from(lazyImages).map(item => imgObserber.observe(item))
//     count = ++count
//     console.log(count)
//   })()
// }
const LazyObserver = (function() {
  let count = 0
  return () => {
    const lazyImages = document.querySelectorAll('img.lazy')
    const imgObserber = new IntersectionObserver(observerHandler)
    Array.from(lazyImages).map(item => imgObserber.observe(item))
    count = ++count
    console.log(count)
  }
})()

function observerHandler(entries, obserber) {
  entries.map(entry => {
    let target = entry.target
    if (entry.isIntersecting) {
      target.classList.remove('lazy')
      target.src = target.dataset.src
    }
  })
}

export default LazyObserver
