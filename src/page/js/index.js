
var app=new Vue({
	el:'#app',
	data:{
		appShow:true,

		designerInfo,//设计师数据
		navInfo,//;导航数据
		counyryInfo:{},//国旗和名字	
		designerDetail:designerInfo[0],//要展示的设计师
		designerList:[],//展示的设计师头像

	},
	mounted(){
		this.changeDesigner(this.designerDetail)
	},
	methods:{
		//点击城市获取设计师列表
		choseTo(item){
			this.designerList=[]
			let midArr=[];
			if(item.type=='city'){
				this.counyryInfo=item;
				this.designerInfo.forEach(v=>{
					if(v.city==item.city){
						midArr.push(v)	
					}
				})
			}	
			function run(arr){
				if(arr.length<=6){
					app.designerList.push(arr)
					return
				}
				app.designerList.push(arr.splice(0,6));
				run(arr);					
			}
			run(midArr);
			setTimeout(()=>{
				this.designerSwiper();
			},10)	
		},
		//点击设计师获取设计师详情
		changeDesigner(item){
			this.designerDetail=item;			
			$('#works-content').load(item.html)
		},
		//初始化设计师轮播
		designerSwiper(){
			new Swiper('#swiper-designer', {
				direction: 'horizontal',
				loop: false,
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.next-designer',
					prevEl: '.prev-designer',
				},
			})
		}

	}
})

window.app=app;



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
$('.shouye').click(function(){
	$('#aa').load('../wang/wang.html')
})