const icone = document.querySelector('.header__menu--icone');
const menu = document.querySelector('.menu-lateral');

icone.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

icone.addEventListener('click', () => {
    icone.classList.toggle('header__menu--icone--ativo')
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
});