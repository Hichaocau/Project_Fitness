const menu = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times')
// }

menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     effect: "fade",
//     grabCursor: true,
//     loop: true,
//     centeredSlides: true,

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// slider animation
var index = 1;
changeImage = function(){
    var imgs = [
        "./images/home-bg-1.jpg",
        "./images/home-bg-4.jpg",
        "./images/home-bg-5.jpg",
    ];
    document.querySelector('.slide_img').src = imgs[index];
    // cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    index++;
    if(index==3){
        index = 0;
    }
}
setInterval(changeImage, 2500)