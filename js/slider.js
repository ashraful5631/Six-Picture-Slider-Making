const totalImage = [
    'image/pic-1.jpg',
    'image/pic-2.jpg',
    'image/pic-3.jpg',
    'image/pic-4.jpg',
    'image/pic-5.jpg',
    'image/pic-6.jpg'
]
let imageIndex = 0;
const imgFind = document.getElementById('img-Element')
setInterval(() => {
    if (imageIndex >= totalImage.length) {
        imageIndex = 0
    }
    const imgUrl = totalImage[imageIndex]
    imgFind.setAttribute('src', imgUrl)
    imageIndex++
}, 1000)

