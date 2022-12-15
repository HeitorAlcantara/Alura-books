const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoHeight: true,
});

const container = document.querySelector(".container");
const elements = Array.from(container.children);
const element = elements.find((element) => element.textContent);


const menu = document.querySelector(".cabecalho__menu--dropdown");
const check = document.querySelector(".container__button");
const menuAberto = document.querySelector(".menuAberto");

menu.addEventListener("click", () => {
    if(!check.checked){
        element.style.background = "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)";
        menu.style.backgroundImage = "url('assets/img/MenuAberto.svg')"; 
    }else{
        element.style.background = "white";
        menu.style.backgroundImage = "url('assets/img/Menu.svg')";
    }
})