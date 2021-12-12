@@include('functions.js');
@@include('scroll.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('form.js');
@@include('gallery.js');


window.onscroll = function showHeader() {
    let header = document.querySelector(".header");

    if (window.pageYOffset > 40) {
        header.classList.add("_active");
    } else {
        header.classList.remove("_active");
    }
}

