const $ = (query) => {
    return document.querySelector(query)
}

window.onscroll = () => {
    if(window.pageYOffset > 10 && !window.matchMedia("(max-width: 600px)").matches) {
        $('.header').classList.add('header-shrink');
        if(window.pageYOffset > 60) {
            $('.header').classList.add('header-shrink-back');
        }
    }else {
        $('.header').classList.remove('header-shrink');
        $('.header').classList.remove('header-shrink-back');
    }
}

const headerToggle = document.querySelector('.header-toggle');
const headerUl = document.querySelector('.header-list ul');

console.log(headerUl.style.display);

headerToggle.addEventListener('click', () => {
    if(headerUl.style.display == "") {   
        headerUl.style.height = "100%";
        headerUl.style.transitionDuration = "0.3s";           headerUl.style.display = "inline-block";
    }else {
        headerUl.style.display = ""
    }
})