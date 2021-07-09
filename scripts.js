// Get elements

const hamb = document.querySelector('.hamb-menu');
const nav = document.querySelector('.nav');

hamb.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
})