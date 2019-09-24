var btnMenu = document.querySelector('.mobile-btn');
var menu = document.querySelector('.menu-options');

console.log(menu);


btnMenu.addEventListener('click', function(){
    console.log('click!');
    
    menu.classList.remove('hidden');
    console.log(menu);
    
});