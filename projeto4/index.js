const dropButton = document.querySelector('.drop-container')
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
const selectedLi = document.querySelector('.selected-li')
dropButton.addEventListener('click', () => {
    menu.classList.toggle('menu-open')
})


options.forEach((option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;


        options.forEach(option => {
            option.classList.remove('selected-li');
        })
        option.classList.add('selected-li');
    });
}));
