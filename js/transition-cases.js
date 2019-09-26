<<<<<<< HEAD
function scrollAppear(){
    var clientCases = document.querySelectorAll('.unique-case');
    var screenHeight = window.innerHeight;

    clientCases.forEach(function(c){
        if(c.getBoundingClientRect().top < screenHeight / 1.25){
            c.classList.add("appear");
        }
    });
};


window.addEventListener('scroll', scrollAppear);

let firstLineCases = document.querySelectorAll('.first-line');

function showInitialElements(){
    firstLineCases.forEach(function(f){
        f.classList.add('appear');
        console.log("oi");
        
    })
};

=======
function scrollAppear(){
    var clientCases = document.querySelectorAll('.unique-case');
    var screenHeight = window.innerHeight;

    clientCases.forEach(function(c){
        if(c.getBoundingClientRect().top < screenHeight / 1.25){
            c.classList.add("appear");
        }
    });
};


window.addEventListener('scroll', scrollAppear);

let firstLineCases = document.querySelectorAll('.first-line');

function showInitialElements(){
    firstLineCases.forEach(function(f){
        f.classList.add('appear');
        console.log("oi");
        
    })
};

>>>>>>> commiting changes to Cases
document.addEventListener('DOMContentLoaded ', showInitialElements());