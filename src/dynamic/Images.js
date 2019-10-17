// fetch random imgaes

const API_KEY = '13292200-78995748d6acf50d8872c2f3d'
const URL = 'https://pixabay.com/api/'
const PER_PAGE = 50
const REQ_IMAGES_DEFAULT_URL = `${URL}?key=${API_KEY}`

export const fetchImages = async (keywords = 'fashion+music') => {
  const res = await fetch(
    `${REQ_IMAGES_DEFAULT_URL}&q=${keywords}&per_page=${PER_PAGE}`,
  ).then(res => res.json())
  const resData = res.hits
  const data = resData.map(image => {
    let {
      webformatWidth,
      webformatHeight,
      previewURL,
      largeImageURL,
      user,
    } = image
    return {
      width: webformatWidth,
      height: webformatHeight,
      'data-prev': previewURL,
      'data-src': largeImageURL,
      alt: `by pixabay user : ${user}`,
    }
  })
  return data
}
/*
            "largeImageURL": "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1736dce753516c4870287ad69e4dc15aba_1280.jpg",
            "webformatHeight": 426,
            "webformatWidth": 640,
            "likes": 1020,
            "imageWidth": 6000,
            "id": 3063284,
            "user_id": 1564471,
            "views": 658115,
            "comments": 228,
            "pageURL": "https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/",
            "imageHeight": 4000,
            "webformatURL": "https://pixabay.com/get/55e0d340485aa814f6da8c7dda79367d1736dce753516c4870287ad69e4dc15aba_640.jpg",
            "type": "photo",
            "previewHeight": 99,
            "tags": "rose, flower, petal",
            "downloads": 419004,
            "user": "annca",
            "favorites": 885,
            "imageSize": 3574625,
            "previewWidth": 150,
            "userImageURL": "https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg",
            "previewURL": "https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg"
        },
*/
