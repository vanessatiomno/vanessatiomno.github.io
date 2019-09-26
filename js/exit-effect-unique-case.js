<<<<<<< HEAD
let allLinks = document.querySelectorAll('a');
let html = document.querySelector('html')
console.log(allLinks);


allLinks.forEach(function(l){
    l.addEventListener('click', function(e){
        e.preventDefault();
        html.classList.add('animated');
        html.classList.add('fadeOut');
        html.classList.add('slow');
        let target = e.target.getAttribute("href");
        console.log(target);
        setTimeout(function(){
            window.location = target;
        }, 1200);
        
        
    })
});


=======
let allLinks = document.querySelectorAll('a');
let html = document.querySelector('html')
console.log(allLinks);


allLinks.forEach(function(l){
    l.addEventListener('click', function(e){
        e.preventDefault();
        html.classList.add('animated');
        html.classList.add('fadeOut');
        html.classList.add('slow');
        let target = e.target.getAttribute("href");
        console.log(target);
        setTimeout(function(){
            window.location = target;
        }, 1200);
        
        
    })
});


>>>>>>> commiting changes to Cases
