<<<<<<< HEAD
let btnMenu = document.querySelector('#nav-icon');
let menuOptions = document.querySelector('.menu-options');

console.log(btnMenu);
console.log(menuOptions);

btnMenu.addEventListener('click', () => {
    menuOptions.classList.toggle('active');
    btnMenu.classList.toggle('active');
    
})


var btn = document.querySelector('#nav-icon');
btn.addEventListener('click', function(){
    this.classList.toggle('open');
})



$(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
			$('#navbar').stop().animate({'opacity':'0.0'},300);
		else	
			$('#navbar').stop().animate({'opacity':'1'},300);
	});
	
	$('#navbar').hover(
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('#navbar').stop().animate({'opacity':'1'},150);
			}
		},
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('#navbar').stop().animate({'opacity':'0.0'},150);
			}
		}
	);
=======
let btnMenu = document.querySelector('#nav-icon');
let menuOptions = document.querySelector('.menu-options');

console.log(btnMenu);
console.log(menuOptions);

btnMenu.addEventListener('click', () => {
    menuOptions.classList.toggle('active');
    btnMenu.classList.toggle('active');
    
})


var btn = document.querySelector('#nav-icon');
btn.addEventListener('click', function(){
    this.classList.toggle('open');
})



$(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
			$('#navbar').stop().animate({'opacity':'0.0'},300);
		else	
			$('#navbar').stop().animate({'opacity':'1'},300);
	});
	
	$('#navbar').hover(
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('#navbar').stop().animate({'opacity':'1'},150);
			}
		},
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('#navbar').stop().animate({'opacity':'0.0'},150);
			}
		}
	);
>>>>>>> commiting changes to Cases
});