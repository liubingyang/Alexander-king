
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
		this.init();
	},
	methods:{
		//页面初始化
		init(){
			this.designerInfo=getSessionStorage('designerInfo',true)||designerInfo;
			let a=getSessionStorage('navInfo',true),
				b=getSessionStorage('designerDetail',true);
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
				$('#works-content').load(this.designerDetail.html)
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
			this.designerInfo.forEach(v=>{
				v.active=false;
				v.showName=false;
			})
			item.active=true;
			item.showName=true;
			setSessionStorage('designerInfo',this.designerInfo,true);
			setSessionStorage('designerDetail',item,true);
			setSessionStorage('navInfo',this.navInfo,true);
			this.designerDetail=item;				
			$('#works-content').load(item.html)		
		},
		//初始化设计师轮播
		designerSwiper(){
			var listSwiper=new Swiper('#swiper-designer', {
				direction: 'horizontal',
				loop: false,
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.next-designer',
					prevEl: '.prev-designer',
				},
			})
			//如果默认展示的设计师在轮播图第二或者第三页
			if(this.designerList.length>1){
				if(this.designerDetail.index>6){
					listSwiper.slideNext();
				}
				if(this.designerDetail.index>12){
					listSwiper.slideNext();
				}
			}
		}

	}
})

window.app=app;


$('.country-design').on('mouseleave', function() {
	$('.country-design').addClass('hide')
})
$('.country-design').on('mouseover', function() {
	$('.country-design').removeClass('hide')
})
$('.design-name').on('mouseover', function() {
	$(this).addClass('origin').siblings().removeClass('origin')
})