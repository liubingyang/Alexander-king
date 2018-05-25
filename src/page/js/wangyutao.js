
new Swiper('.swiper-container.banner-wangyutao', {
	direction: 'horizontal',
	loop: true,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.next-banner',
		prevEl: '.prev-banner',
	},

})

var myVideo=document.getElementsByClassName('wangyutao-video1')[0];

$('.play-btn').click(function(){
	$(this).toggleClass('hide');
	if($(this).hasClass('hide')){
		myVideo.play();
	}else{
		myVideo.pause();
	}

	
})
