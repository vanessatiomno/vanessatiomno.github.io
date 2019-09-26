<<<<<<< HEAD
var lines = document.querySelectorAll('.line');
function appear(){
console.log('oi');

        lines.forEach(function(line){
            setTimeout(function(){
                line.classList.add("appear")
            }, 500)
        }
    )
}
//content appears as page is scrolled
document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('load', appear);
})
=======
var lines = document.querySelectorAll('.line');
function appear(){
console.log('oi');

        lines.forEach(function(line){
            setTimeout(function(){
                line.classList.add("appear")
            }, 500)
        }
    )
}
//content appears as page is scrolled
document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('load', appear);
})
>>>>>>> commiting changes to Cases
