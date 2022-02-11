const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween:27,
    loop: true,
    
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    }
  });