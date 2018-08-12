images = ['https://img00.deviantart.net/db6b/i/2010/152/e/6/future_scenes____shopping_mall_by_anasrist.jpg', 'https://img00.deviantart.net/7d82/i/2012/203/5/3/taoar___environment_studies___mountain_valley_by_anasrist-d587qd3.jpg', 'https://img00.deviantart.net/9f62/i/2012/009/8/6/the_engineering_bay_by_anasrist-d4lsz35.jpg', 'https://img00.deviantart.net/a9b1/i/2012/103/9/7/gnomesville_by_anasrist-d4vzyo7.jpg']

// Globals
show_image = 0

var getImageBackground = (right) => {
    if(right == 1) {
        show_image++
        show_image = show_image % images.length
    }else {
        show_image--
        if (show_image == -1) {
            show_image = images.length - 1
        }
    }
    return images[show_image]
}

// Get Elements
var left_arrow = document.querySelector('.arrow-left')
var right_arrow = document.querySelector('.arrow-right')
var carousel_image = document.querySelector('.carousel-image')
var header_ham = document.querySelector('.header-ham')
var header = document.querySelector('.header')

// Carousel 
left_arrow.addEventListener("click", () => {
    img = getImageBackground(0)
    console.log(img)
    carousel_image.style.background = 'url('+
    img +') no-repeat'
    carousel_image.style.backgroundSize = 'cover'
    carousel_image.style.backgroundAttachment = 'fixed'
})
right_arrow.addEventListener("click", () => {
    img = getImageBackground(1)
    console.log(img)
    carousel_image.style.background = 'url('+
    img +') '
    carousel_image.style.backgroundSize = 'cover'
    carousel_image.style.backgroundAttachment = 'fixed'
})

header_ham.addEventListener("click", () => {
    if (header.classList.contains('header-open')) {
        header.classList.remove('header-open')
    }else {
        header.classList.add('header-open')
    }
})