var logo = document.querySelector('.logo-at-header')
// console.log(logo);

logo.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
