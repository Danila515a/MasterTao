const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', ()=>btnBurger.classList.toggle('is-active') )
const swiperBanner = new Swiper('.swiper-banner', {
  
    direction:'horizontal',
    loop: true,
    

  
    pagination: {
    clickable: true,
    el: '.swiper-pagination',
    },

  
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  
    
});