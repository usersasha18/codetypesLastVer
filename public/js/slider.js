const next_btn = document.querySelector('.next-btn');
const prev_btn = document.querySelector('.prev-btn');
const slider_items = document.querySelectorAll('.slider-item');
let slide_index = 0;

next_btn.addEventListener('click', next)
prev_btn.addEventListener('click', prev)

function prev() {
    slider_items[slide_index].classList.remove('active-slide')
    slide_index--
    if (slide_index < 0) {
        slide_index = slider_items.length - 1;
    }
    slider_items[slide_index].classList.add('active-slide')
}

function next() {
    slider_items[slide_index].classList.remove('active-slide')
    slide_index++
    if (slide_index >= slider_items.length) {
        slide_index = 0;
    }
    slider_items[slide_index].classList.add('active-slide')
}