const menu = document.querySelector('.menu')

const burger = document.querySelector('.burger')


function showMenu() {
    burger.onclick = function() {
        menu.classList.toggle('menuActive')
        burger.classList.toggle('burgerActive')
    }
}

showMenu()

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
