var commonUrl=location.href.split('page')[0]//.../src




function setSessionStorage(k,v,b){
	if(b){
		sessionStorage.setItem(k,JSON.stringify(v))
		return;
	}
	sessionStorage.setItem(k,v)
}
function getSessionStorage(k,b){
	let mid=sessionStorage.getItem(k);
	if(b&&mid){
		return JSON.parse(mid);
	}
	return mid;
}

//导航信息
var navInfo=[
{name:'首页'},
{name:'中国',active:false,type:'city',city:'China',countryFlag:commonUrl+'image/flag-China.png'},
{name:'巴黎',active:false,type:'city',city:'Paris',countryFlag:commonUrl+'image/flag-France.png'},
{name:'纽约',active:false,type:'city',city:'newYork',countryFlag:commonUrl+'image/flag-American.png'},
{name:'伦敦',active:false,type:'city',city:'London',countryFlag:commonUrl+'image/flag-Britain.png'},
{name:'米兰',active:false,type:'city',city:'Milan',countryFlag:commonUrl+'image/flag-Italy.png'},
{name:'台湾',active:false,type:'city',city:'taiwan',countryFlag:commonUrl+'image/flag-China.png'},
{name:'北欧',active:false,type:'city',city:'NorthernEurope',countryFlag:commonUrl+'image/flag-Fashion.png'},
{name:'时尚合作',active:false,type:'city',city:'shishanghezuo',countryFlag:commonUrl+'image/flag-Fashion.png'},
];
// 设计师信息
var designerInfo=[{
			name:'KING',
			id:'king',
			city:'newYork',				
			discribCity:'NEW YORK',
			discribTit:'ALEXANDER KING',
			discribBrand:['ALEXANDER KING CHEN','设计师陈科維ALEX的同名品牌'],
			meContent:['亚洲设计师，设计前卫、大胆，不按牌理出牌，独树一格，媒体新宠儿，也是国内手屈一指的黄金单身汉之一。经常受邀至纽约，上海举办服装秀，2017世界皮草协会，唯一赞助品牌盛名也是众多女星拥护者，范冰冰、蔡依林、萧亚轩、田馥甄、张韶涵、Ella等…','2009年在纽约自创同名品牌之后，因为家庭因素将其带回亚洲。主要销售区域为台湾。'],
			desiginBigimg:commonUrl+'image/king-big.jpg',
			desiginSmallimg:commonUrl+'image/king-small.jpg',		
			background:commonUrl+'image/king-bg.jpg',	
			headImg:commonUrl+'image/king-head.png',			
			countryName:'美国',	
			countryFlag:commonUrl+'image/flag-American.png',
			html:commonUrl+'page/king.html'
		},{
			name:'杨峻杰',	
			id:'yangjunjie',
			city:'newYork',			
			discribCity:'NEW YORK',
			discribTit:'杨峻杰',
			discribBrand:['清华大学美术学院服装设计系','安特卫普皇家艺术学院'],
			meContent:[' 曾在比利时设计师Raf Simons工作室以男装设计师的职务实习，目前在比利时品牌Walter Van Beirandonck担任印花设计兼男装设计助理职务。','于2017年在比利时安特卫普的男装品牌，致力于塑造东方审美情趣为主导内核，同西方后现代主义结合的千禧一代的年轻时装。年轻，无惧（young,bold,daring,smart)是品牌想要传递的形象。主要销售区域为中国。'],
			desiginBigimg:commonUrl+'image/yangjunjie-big.jpg',
			desiginSmallimg:commonUrl+'image/yangjunjie-small.jpg',		
			background:commonUrl+'image/yangjunjie-bg.jpg',	
			headImg:commonUrl+'image/yangjunjie-head.png',
			countryName:'美国',	
			countryFlag:commonUrl+'image/American.png',
			html:commonUrl+'page/yangjunjie.html'
		},{
			name:'王大仁',	
			id:'wangdaren',
			city:'newYork',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/wangdaren-big.jpg',
			desiginSmallimg:commonUrl+'image/wangdaren-small.jpg',		
			background:commonUrl+'image/wangdaren-bg.jpg',					
			headImg:commonUrl+'image/wangdaren-head.png',
			countryName:'美国',	
			countryFlag:commonUrl+'image/flag-American.png',
			html:commonUrl+'page/wangdaren.html'
		},{
			name:'张旸',	
			id:'zhangyang',
			city:'taiwan',			
			discribCity:'TAIWAN',
			discribTit:'张旸',
			discribBrand:['中国台北定制设计师的代表','毕业于巴黎制衣公会'],
			meContent:['创立了自有品牌HOMME VAN LAB，系列作品多从历史、艺术和文化的角度重新阐述当代的社会样貌。',' 张旸擅长将艺术性的印花配合独有的版型来体现一个系列的故事性，他的表现手法使HOMME VAN LAB成为具有阅读性的时尚品牌。主要销售区域为台湾。'],
			desiginBigimg:commonUrl+'image/zhangyang-big.jpg',
			desiginSmallimg:commonUrl+'image/zhangyang-small.jpg',		
			background:commonUrl+'image/zhangyang-bg.jpg',					
			headImg:commonUrl+'image/zhangyang-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zhangyang.html'
		},{
			name:'郭培',	
			id:'guopei',
			city:'Paris',			
			discribCity:'PARIS',
			discribTit:'郭培',
			discribBrand:['中国首位被世界认可的高级服装设计师',''],
			meContent:['作为第一代中国服装设计师，她自1986年以来在专业领域不断探索，成为北京天马服装公司的首席设计师，之后在 1997 年创立北京玫瑰坊时装订制有限公司，开创了年来广博赞誉的高级订制，都是郭培不断地挑战自我、追求最完美设计的过程。作为高级订制在中国最早的推动者之一，郭培的玫瑰坊无疑代表着中国高级订制的最高水准。主要销售区域为中国。',''],
			desiginBigimg:commonUrl+'image/guopei-big.jpg',
			desiginSmallimg:commonUrl+'image/guopei-small.jpg',		
			background:commonUrl+'image/guopei-bg.jpg',					
			headImg:commonUrl+'image/guopei-head.png',
			countryName:'法国',	
			countryFlag:commonUrl+'image/flag-France.png',
			html:commonUrl+'page/guopei.html'
		},{
			name:'Lucien-Wang',	
			id:'lucien-wang',
			city:'Paris',			
			discribCity:'PARIS',
			discribTit:'LUCIEN WANG',
			discribBrand:['毕业于法国巴黎studio berco服装设计学院',''],
			meContent:['  2008年，在世界时装之都巴黎创立一自己名字命名的品牌lucien wang。2012年lucien wang品牌在北京设计了工作室，产品范围涵盖了高级女装成衣、手袋、配饰、鞋履等。2013年11约正式推出高级成衣2014春夏系列，2016年12月以发布8个完整女装成衣系列，2014年，lucien荣列为纪念中法建交五十年而全球播映的法语系列人物短片《50年50人》名单。主要销售区域为北京。'],
			desiginBigimg:commonUrl+'image/lucien-wang-big.jpg',
			desiginSmallimg:commonUrl+'image/lucien-wang-small.jpg',		
			background:commonUrl+'image/lucien-wang-bg.jpg',					
			headImg:commonUrl+'image/lucien-wang-head.png',
			countryName:'法国',	
			countryFlag:commonUrl+'image/flag-France.png',
			html:commonUrl+'page/lucien-wang.html'
		},{
			name:'FangFang',	
			id:'fangfang',
			city:'Milan',			
			discribCity:'MILAN',
			discribTit:'FANGFANG',
			discribBrand:['伦敦时装学院男装设计研究生专业,品牌创始人',''],
			meContent:['2015 年CONSISTENCE 创建于英国伦敦。2016年开始获得ukft英国时装与面料协会的奖金参加巴黎时装周展会。2017年获得Giorgio Armani钦点，在众多设计师中脱颖而出，受邀赴米兰时装周官方日程走秀，由阿玛尼先生和意大利时装协会全程赞助。国际知名裘皮供应商及皮草工艺创意研究所哥本哈根⽪草的对品牌赞誉有嘉，为品牌赞助所有皮草原料与技术支持。主要销售区域为中国。',''],
			desiginBigimg:commonUrl+'image/fangfang-big.jpg',
			desiginSmallimg:commonUrl+'image/fangfang-small.jpg',		
			background:commonUrl+'image/fangfang-bg.jpg',					
			headImg:commonUrl+'image/fangfang-head.png',
			countryName:'意大利',	
			countryFlag:commonUrl+'image/flag-Italy.png',
			html:commonUrl+'page/fangfang.html'
		},{
			name:'刘璐璐',	
			id:'liululu',
			city:'London',			
			discribCity:'LONDON',
			discribTit:'刘璐璐',
			discribBrand:['伦敦时装学院时装设计','致力于自己的商标LIU LULU'],
			meContent:[' LULU LIU是一个大胆而自信的品牌，让人们能够以原始而独特的方式展现出品牌的风格。该品牌将高端时尚的奢华和富裕与灵巧和品质相结合，开创了前沿服装，不仅显示了停顿和独特，也保持了耐用性、女性气质及优雅感。品牌关键的签名样式采用了大尺寸的衣褶，混合了皮草，长层，明亮的针织和鲜艳的色彩。主要销售区域为中国、英国。',''],
			desiginBigimg:commonUrl+'image/liululu-big.jpg',
			desiginSmallimg:commonUrl+'image/liululu-small.jpg',		
			background:commonUrl+'image/liululu-bg.jpg',					
			headImg:commonUrl+'image/liululu-head.png',
			countryName:'英国',	
			countryFlag:commonUrl+'image/flag-Britain.png',
			html:commonUrl+'page/liululu.html'
		},{
			name:'谢锋',	
			id:'xiefeng',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/xiefeng-big.jpg',
			desiginSmallimg:commonUrl+'image/xiefeng-small.jpg',		
			background:commonUrl+'image/xiefeng-bg.jpg',					
			headImg:commonUrl+'image/xiefeng-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/xiefeng.html'
		},{
			name:'祁刚',	
			id:'qigang',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/qigang-big.jpg',
			desiginSmallimg:commonUrl+'image/qigang-small.jpg',		
			background:commonUrl+'image/qigang-bg.jpg',					
			headImg:commonUrl+'image/qigang-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/qigang.html'
		},{
			name:'王玉涛',	
			id:'wangyutao',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/wangyutao-big.jpg',
			desiginSmallimg:commonUrl+'image/wangyutao-small.jpg',		
			background:commonUrl+'image/wangyutao-bg.jpg',					
			headImg:commonUrl+'image/wangyutao-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/wangyutao.html'
		},{
			name:'RanFan',	
			id:'RanFan',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/RanFan-big.jpg',
			desiginSmallimg:commonUrl+'image/RanFan-small.jpg',		
			background:commonUrl+'image/RanFan-bg.jpg',					
			headImg:commonUrl+'image/RanFan-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/RanFan.html'
		},{
			name:'姜悦音',	
			id:'jiangyueyin',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/jiangyueyin-big.jpg',
			desiginSmallimg:commonUrl+'image/jiangyueyin-small.jpg',		
			background:commonUrl+'image/jiangyueyin-bg.jpg',					
			headImg:commonUrl+'image/jiangyueyin-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/jiangyueyin.html'
		},{
			name:'魏腾飞',	
			id:'weipengfei',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/weipengfei-big.jpg',
			desiginSmallimg:commonUrl+'image/weipengfei-small.jpg',		
			background:commonUrl+'image/weipengfei-bg.jpg',					
			headImg:commonUrl+'image/weipengfei-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/weipengfei.html'
		},{
			name:'刘芳',	
			id:'liufang',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/liufang-big.jpg',
			desiginSmallimg:commonUrl+'image/liufang-small.jpg',		
			background:commonUrl+'image/liufang-bg.jpg',					
			headImg:commonUrl+'image/liufang-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/liufang.html'
		},{
			name:'秦旭',	
			id:'qinxu',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/qinxu-big.jpg',
			desiginSmallimg:commonUrl+'image/qinxu-small.jpg',		
			background:commonUrl+'image/qinxu-bg.jpg',					
			headImg:commonUrl+'image/qinxu-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/qinxu.html'
		},{
			name:'CJ姚',	
			id:'CJyao',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/CJyao-big.jpg',
			desiginSmallimg:commonUrl+'image/CJyao-small.jpg',		
			background:commonUrl+'image/CJyao-bg.jpg',					
			headImg:commonUrl+'image/CJyao-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/CJyao.html'
		},{
			name:'杨芳',	
			id:'yangfang',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/yangfang-big.jpg',
			desiginSmallimg:commonUrl+'image/yangfang-small.jpg',		
			background:commonUrl+'image/yangfang-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/yangfang-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/yangfang.html'
		},{
			name:'王聪',	
			id:'wangcong',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/wangcong-big.jpg',
			desiginSmallimg:commonUrl+'image/wangcong-small.jpg',		
			background:commonUrl+'image/wangcong-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/wangcong-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/wangcong.html'
		},{
			name:'邹游',	
			id:'zouyou',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/zouyou-big.jpg',
			desiginSmallimg:commonUrl+'image/zouyou-small.jpg',		
			background:commonUrl+'image/zouyou-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/zouyou-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zouyou.html'
		},{
			name:'齐斌',	
			id:'qibin',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/qibin-big.jpg',
			desiginSmallimg:commonUrl+'image/qibin-small.jpg',		
			background:commonUrl+'image/qibin-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/qibin-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/qibin.html'
		},{
			name:'匡峻',	
			id:'kuangjun',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/kuangjun-big.jpg',
			desiginSmallimg:commonUrl+'image/kuangjun-small.jpg',		
			background:commonUrl+'image/kuangjun-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/kuangjun-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/kuangjun.html'
		},{
			name:'康悦',	
			id:'kangyue',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/kangyue-big.jpg',
			desiginSmallimg:commonUrl+'image/kangyue-small.jpg',		
			background:commonUrl+'image/kangyue-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/kangyue-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/kangyue.html'
		},{
			name:'朱小杰',	
			id:'zhuxiaojie',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/zhuxiaojie-big.jpg',
			desiginSmallimg:commonUrl+'image/zhuxiaojie-small.jpg',		
			background:commonUrl+'image/zhuxiaojie-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/zhuxiaojie-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zhuxiaojie.html'
		},{
			name:'赵伟伟',	
			id:'zhaoweiwei',
			city:'China',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/zhaoweiwei-big.jpg',
			desiginSmallimg:commonUrl+'image/zhaoweiwei-small.jpg',		
			background:commonUrl+'image/zhaoweiwei-big.jpg-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/zhaoweiwei-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zhaoweiwei.html'
		},{
			name:'时尚合作',	
			id:'shishanghezuo',
			city:'shishanghezuo',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/zhaoweiwei-big.jpg',
			desiginSmallimg:commonUrl+'image/zhaoweiwei-small.jpg',		
			background:commonUrl+'image/zhaoweiwei-big.jpg-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/shishanghezuo-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zhaoweiwei.html'
		},{
			name:'法新集团',	
			id:'faxinjituan',
			city:'shishanghezuo',			
			discribCity:'NEW YORK',
			discribTit:'Alexander Wang',
			discribBrand:['王大仁是华裔ABC','纽约最红最年轻的华裔设计师'],
			meContent:['1984年出生于美国旧金山，18岁时搬去纽约，并在纽约著名得时装设计学院Parsons攻读设计专业，Alexander二年级时就在Marc Jacobs品牌和《Vogue》杂志实习，多次获得CFDA等颁发的时装界大奖，他的设计堪称叫好又叫座，销售更是节节攀升。',' 在刚刚过去的2018纽约时装周，王大仁与哥本哈根皮草展开了合作。主要的销售区域在全球各地。'],
			desiginBigimg:commonUrl+'image/zhaoweiwei-big.jpg',
			desiginSmallimg:commonUrl+'image/zhaoweiwei-small.jpg',		
			background:commonUrl+'image/zhaoweiwei-big.jpg-big.jpg-bg.jpg',					
			headImg:commonUrl+'image/faxinjituan-head.png',
			countryName:'中国',	
			countryFlag:commonUrl+'image/flag-China.png',
			html:commonUrl+'page/zhaoweiwei.html'
		},]
