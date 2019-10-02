let buttonMenu = document.querySelector('#nav-icon');
let menuOptions = document.querySelector('.menu-options');
let clientName = document.querySelector('.client-name-title');

buttonMenu.addEventListener('click', () => {
    menuOptions.classList.toggle('active');
    buttonMenu.classList.toggle('active');
    if(clientName != null){
        clientName.classList.toggle('hidden');
    }
})

menuOptions.addEventListener('click', () => {
    if(clientName != null){
        clientName.classList.toggle('hidden');
    }
    menuOptions.classList.remove('active');
    buttonMenu.classList.remove('active');
    btn.classList.toggle('open')
})


var btn = document.querySelector('#nav-icon');
btn.addEventListener('click', function() {
    this.classList.toggle('open');
})



// $(function() {
// 	$(window).scroll(function(){
// 		var scrollTop = $(window).scrollTop();
// 		if(scrollTop != 0)
// 			// $('#navbar').stop().animate({'opacity':'0.0'},300);
// 		else	
// 			$('#navbar').stop().animate({'opacity':'1'},300);

// 	});

// 	$('#navbar').hover(
// 		function (e) {
// 			var scrollTop = $(window).scrollTop();
// 			if(scrollTop != 0){
// 				$('#navbar').stop().animate({'opacity':'1'},150);
// 			}
// 		},
// 		function (e) {
// 			var scrollTop = $(window).scrollTop();
// 			if(scrollTop != 0){
// 				$('#navbar').stop().animate({'opacity':'0.0'},150);
// 			}
// 		}
// 	);
// });