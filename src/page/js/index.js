
var app=new Vue({
	el:'#app',
	data:{
		appShow:true,

		designerInfo,//设计师数据
		navInfo,//;导航数据
		counyryInfo:{},//国旗和名字	
		designerDetail:designerInfo[0],//要展示的设计师
		designerList:[],//展示的设计师头像

		indexShow:true,//首页展示
		navShow:false,//设计师列表展示

		swi:{},
	},
	mounted(){
		this.init();
		this.indexBanner();//首页轮播图
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
				this.indexShow=this.designerDetail.indexShow;
				this.navShow=this.designerDetail.navShow;
				$('#works-content').load(this.designerDetail.html)
			}
		},
		//点击城市获取设计师列表
		choseTo(item){
			if(item.name=='首页'){
				this.indexShow=this.designerDetail.indexShow=true;
				this.navShow=this.designerDetail.navShow=false;
				setSessionStorage('designerDetail',this.designerDetail,true);
				setTimeout(()=>{
					$('.pagination-sessionone .swiper-pagination-bullet')[0].click();
					$('.pagination-index .swiper-pagination-bullet')[0].click();
				},50)

			}else{
				this.navShow=true;
			}			
				this.navInfo.forEach(v=>{v.active=false})
				item.active=true;
				item.name=='首页'?setSessionStorage('navInfo',this.navInfo,true):'';			
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
		
		//点击地图
		clickMap(item){
			this.choseTo(item);
			this.changeDesigner(this.designerList[0][0])
						window.scrollTo(0,100);	
		},

		//点击设计师获取设计师详情
		changeDesigner(item){
			this.indexShow=item.indexShow=false;
			this.navShow=item.navShow=true;
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
			$('#works-content').load(item.html);	
						
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
		},
		// 首页轮播图
		indexBanner(){
			var swi=new Swiper('.swiper-container.banner-index', {
				autoplay:{autoplay : 2000,disableOnInteraction:false},
				direction : 'horizontal',
				loop : true,
				pagination: {
				    el: '.swiper-pagination.pagination-index',
				     clickable :true,
				  },
			})
			//小图轮播
			var swi2=new Swiper('.banner-sessionone', {
				autoplay:{autoplay : 4000,disableOnInteraction:false},
				direction : 'horizontal',
				loop : true,
				pagination: {
				    el: '.swiper-pagination.pagination-sessionone',
				     clickable :true,
				  },
			})
		},
		returnIndex(){
			this.choseTo(this.navInfo[0])
			window.scrollTo(0,100);	
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