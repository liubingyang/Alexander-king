$('.country-name').on('mouseover', function() {
	$(this).addClass('origin').siblings().removeClass('origin')
	if ($(this)[0].innerHTML == '纽约') {
		$('.country-design').removeClass('hide')
	}

})

$('.country-design').on('mouseleave', function() {
	$('.country-design').addClass('hide')
})
$('.country-design').on('mouseover', function() {
	$('.country-design').removeClass('hide')
})
$('.design-name').on('mouseover', function() {
	$(this).addClass('origin').siblings().removeClass('origin')
})
var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

})