<<<<<<< HEAD
function scrollAppear(){
    var imgs = document.querySelectorAll('.imagem');
    var screenHeight = window.innerHeight;

    imgs.forEach(function(img){
        if(img.getBoundingClientRect().top < screenHeight / 1.25){
            img.classList.add("appear");
        }
    });
};

//content appears as page is scrolled
window.addEventListener('scroll', scrollAppear);


// 1st image loads as page is loaded
document.addEventListener('DOMContentLoaded', function(){
    var img1 = document.querySelector(".img-1");
    img1.classList.add('appear');
});
=======
function scrollAppear(){
    var imgs = document.querySelectorAll('.imagem');
    var screenHeight = window.innerHeight;

    imgs.forEach(function(img){
        if(img.getBoundingClientRect().top < screenHeight / 1.25){
            img.classList.add("appear");
        }
    });
};

//content appears as page is scrolled
window.addEventListener('scroll', scrollAppear);


// 1st image loads as page is loaded
document.addEventListener('DOMContentLoaded', function(){
    var img1 = document.querySelector(".img-2");
    img1.classList.add('appear');
});
>>>>>>> commiting changes to Cases
