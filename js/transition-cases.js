// function scrollAppear(){
//     var clientCases = document.querySelectorAll('.unique-case');
//     var screenHeight = window.innerHeight;

//     clientCases.forEach(function(c){
//         if(c.getBoundingClientRect().top < screenHeight / 1.25){
//             c.classList.add("appear");
//         }
//     });
// };


// window.addEventListener('scroll', scrollAppear);

// let firstLineCases = document.querySelectorAll('.first-line');
let firstLineCases = document.querySelectorAll('.unique-case')

function showInitialElements(){
    firstLineCases.forEach(function(f){
        f.classList.add('appear');
        
    })
};

document.addEventListener('DOMContentLoaded ', showInitialElements());