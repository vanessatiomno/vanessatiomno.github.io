<<<<<<< HEAD
var menu = document.querySelector('.menu');

function voltaMenu(){
menu.classList.remove('menu-fade-out');
};

window.addEventListener('scroll', function(){
    menu.classList.add('menu-fade-out');
    setTimeout(voltaMenu, 500);
})

=======
var menu = document.querySelector('.menu');

function voltaMenu(){
menu.classList.remove('menu-fade-out');
};

window.addEventListener('scroll', function(){
    menu.classList.add('menu-fade-out');
    setTimeout(voltaMenu, 500);
})

>>>>>>> commiting changes to Cases
