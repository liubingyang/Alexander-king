
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
	created(){
		
	},
	mounted(){
		this.init();
		this.changeDesigner(this.designerDetail)
	},
	methods:{
		//页面初始化
		init(){
			let a=getSessionStorage('navInfo',true),b=getSessionStorage('designerDetail',true);
			if(a){//处理导航栏及设计师头像展示
				this.navInfo=a;
				this.navInfo.forEach(v=>{
					if(v.active){
						this.designerHead(v);
					}
				})
			};
			if(b){
				this.designerDetail=b;
				// $('#works-content').load(this.designerDetail.html)
			}
		},
		//点击城市获取设计师列表
		choseTo(item){			
			this.navInfo.forEach(v=>{v.active=false})
			item.active=true;			
			this.designerList=[]
			this.designerHead(item);
		},
		//处理并展示设计师头像
		designerHead(item){
			let midArr=[];
			if(item.type=='city'){
				this.counyryInfo=item;
				this.designerInfo.forEach(v=>{
					if(v.city==item.city){
						midArr.push(v)	
					}
				})
			}	
			let _this=this;
			function run(arr){
				if(arr.length<=6){
					_this.designerList.push(arr)
					return
				}
				_this.designerList.push(arr.splice(0,6));
				run(arr);					
			}
			run(midArr);
			setTimeout(()=>{
				this.designerSwiper();
			},10)	
		},
		//点击设计师获取设计师详情
		changeDesigner(item){
			setSessionStorage('designerDetail',item,true);
			setSessionStorage('navInfo',this.navInfo,true);
			this.designerDetail=item;				
			// $('#works-content').load(item.html)
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



// $('.country-name').on('click', function() {
// 	$(this).addClass('origin').siblings().removeClass('origin')
// })

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