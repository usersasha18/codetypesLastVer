const button = document.querySelector('.change-button')
const themes_buttons = document.querySelectorAll('.theme-button')


function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'orange-theme', 'light-theme', 'gray-theme');
    document.body.classList.add(theme)
    localStorage.setItem("theme",theme)
}

function getTheme() {
    return localStorage.getItem('theme');
}

function applySavedTheme() {
    const savedTheme = getTheme();
    if (savedTheme) {
        setTheme(savedTheme);
    }
}

applySavedTheme();

themes_buttons.forEach((item ,idx) => {
    item.addEventListener('click', function() {
        if (item.dataset.theme === "dark") {
            setTheme('dark-theme')
        } else if (item.dataset.theme === "orange") {
            setTheme('orange-theme')
        } else if (item.dataset.theme === "gray") {
            setTheme('gray-theme')
        } else {
            setTheme('light-theme')
        }
    })
})


button.addEventListener('click', function() {
    document.querySelector('.change-block').classList.toggle('visible')
})
