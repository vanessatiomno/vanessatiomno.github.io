var btnMenu = document.querySelector(".mobile-btn");
var menuMobile = document.querySelector(".mobile-menu");

// console.log(menuMobile);
// console.log(btnMenu);


menuMobile.addEventListener('click', function(){
    // console.log('fui clicado');
    
    this.classList.remove('active');
    btnMenu.classList.remove('active');
});
