$('.country-name').on('click', function() {
	$(this).addClass('origin').siblings().removeClass('origin')
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
var mySwiper = new Swiper('#swiper-banner', {
	direction: 'horizontal',
	loop: true,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.next-banner',
		prevEl: '.prev-banner',
	},

})
var designerBnner=new Swiper('#swiper-designer', {
	direction: 'horizontal',
	loop: false,
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.next-designer',
		prevEl: '.prev-designer',
	},

})
$('.shouye').click(function(){
	$('#aa').load('../wang/wang.html')
})