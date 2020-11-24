const menu_btn = document.querySelector('button');
const img = document.querySelector('#img')
const menu = document.querySelector('.menu');

const shadow = document.querySelector('.navbar');



menu_btn.addEventListener('click', function () {
    menu.classList.toggle('menu_show');
    shadow.classList.toggle('shadow');
    menu.classList.toggle('shadow');
})


