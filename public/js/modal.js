const modal_window = document.querySelector('.register-modal');
const inner_modal_window = document.querySelector('.inner-register-modal');
const close_button = document.querySelector('.close-btn')
const modal_button = document.querySelector('.register');
const body = document.querySelector('body')


modal_button.addEventListener('click', openWindow)

body.addEventListener("keyup", function(event) {
    console.log(event.code)
    if(event.code == "Escape") {
        inner_modal_window.classList.remove('show-modal')
        modal_window.classList.remove('register-modal-open')
    }
})

close_button.addEventListener('click', function() {
    inner_modal_window.classList.remove('show-modal')
    modal_window.classList.remove('register-modal-open')
})

function openWindow() {
    inner_modal_window.classList.add('show-modal')
    modal_window.classList.add('register-modal-open')
}

