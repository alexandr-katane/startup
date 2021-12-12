
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }



if (document.querySelector('.team__body ')) {
    let mainSlider = new Swiper('.team__body', {
        speed: 800,
        loop: true,
        reloadImages: false,
        spaceBetween: 30,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.slider__arrow_next',
            prevEl: '.slider__arrow_prev',
        },
    });
}


if (document.querySelector('.slider__body')) {
    let mainSlider = new Swiper('.slider__body', {
        slidesPerView: 'auto',
        speed: 800,
        loop: true,
        reloadImages: false,
        parallax: true,
        autoplay: {
            delay: 4200,
            disableOnInteraction: false
        },
        pagination: {
            el: '.controls-slider__dotts',
            clickable: true,
        },
    });
}
