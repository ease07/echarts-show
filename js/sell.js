//地理坐标
var geoCoordMap = {
	"通辽":[122.27,43.62],
	"海门":[121.15,31.89],
	"鄂尔多斯":[109.781327,39.608266],
	"招远":[120.38,37.35],
	"舟山":[122.207216,29.985295],
	"齐齐哈尔":[123.97,47.33],
	"盐城":[120.13,33.38],
	"赤峰":[118.87,42.28],
	"青岛":[120.33,36.07],
	"乳山":[121.52,36.89],
	"金昌":[102.188043,38.520089],
	"泉州":[118.58,24.93],
	"莱西":[120.53,36.86],
	"日照":[119.46,35.42],
	"胶南":[119.97,35.88],
	"南通":[121.05,32.08],
	"拉萨":[91.11,29.97],
	"云浮":[112.02,22.93],
	"梅州":[116.1,24.55],
	"文登":[122.05,37.2],
	"上海":[121.48,31.22],
	"攀枝花":[101.718637,26.582347],
	"威海":[122.1,37.5],
	"承德":[117.93,40.97],
	"厦门":[118.1,24.46],
	"汕尾":[115.375279,22.786211],
	"潮州":[116.63,23.68],
	"丹东":[124.37,40.13],
	"太仓":[121.1,31.45],
	"曲靖":[103.79,25.51],
	"烟台":[121.39,37.52],
	"福州":[119.3,26.08],
	"瓦房店":[121.979603,39.627114],
	"即墨":[120.45,36.38],
	"抚顺":[123.97,41.97],
	"玉溪":[102.52,24.35],
	"张家口":[114.87,40.82],
	"阳泉":[113.57,37.85],
	"莱州":[119.942327,37.177017],
	"湖州":[120.1,30.86],
	"汕头":[116.69,23.39],
	"昆山":[120.95,31.39],
	"宁波":[121.56,29.86],
	"湛江":[110.359377,21.270708],
	"揭阳":[116.35,23.55],
	"荣成":[122.41,37.16],
	"连云港":[119.16,34.59],
	"葫芦岛":[120.836932,40.711052],
	"常熟":[120.74,31.64],
	"东莞":[113.75,23.04],
	"河源":[114.68,23.73],
	"淮安":[119.15,33.5],
	"泰州":[119.9,32.49],
	"南宁":[108.33,22.84],
	"营口":[122.18,40.65],
	"惠州":[114.4,23.09],
	"江阴":[120.26,31.91],
	"蓬莱":[120.75,37.8],
	"韶关":[113.62,24.84],
	"嘉峪关":[98.289152,39.77313],
	"广州":[113.23,23.16],
	"延安":[109.47,36.6],
	"太原":[112.53,37.87],
	"清远":[113.01,23.7],
	"中山":[113.38,22.52],
	"昆明":[102.73,25.04],
	"寿光":[118.73,36.86],
	"盘锦":[122.070714,41.119997],
	"长治":[113.08,36.18],
	"深圳":[114.07,22.62],
	"珠海":[113.52,22.3],
	"宿迁":[118.3,33.96],
	"咸阳":[108.72,34.36],
	"铜川":[109.11,35.09],
	"平度":[119.97,36.77],
	"佛山":[113.11,23.05],
	"海口":[110.35,20.02],
	"江门":[113.06,22.61],
	"章丘":[117.53,36.72],
	"肇庆":[112.44,23.05],
	"大连":[121.62,38.92],
	"临汾":[111.5,36.08],
	"吴江":[120.63,31.16],
	"石嘴山":[106.39,39.04],
	"沈阳":[123.38,41.8],
	"苏州":[120.62,31.32],
	"茂名":[110.88,21.68],
	"嘉兴":[120.76,30.77],
	"长春":[125.35,43.88],
	"胶州":[120.03336,36.264622],
	"银川":[106.27,38.47],
	"张家港":[120.555821,31.875428],
	"三门峡":[111.19,34.76],
	"锦州":[121.15,41.13],
	"南昌":[115.89,28.68],
	"柳州":[109.4,24.33],
	"三亚":[109.511909,18.252847],
	"自贡":[104.778442,29.33903],
	"吉林":[126.57,43.87],
	"阳江":[111.95,21.85],
	"泸州":[105.39,28.91],
	"西宁":[101.74,36.56],
	"宜宾":[104.56,29.77],
	"呼和浩特":[111.65,40.82],
	"成都":[104.06,30.67],
	"大同":[113.3,40.12],
	"镇江":[119.44,32.2],
	"桂林":[110.28,25.29],
	"张家界":[110.479191,29.117096],
	"宜兴":[119.82,31.36],
	"北海":[109.12,21.49],
	"西安":[108.95,34.27],
	"金坛":[119.56,31.74],
	"东营":[118.49,37.46],
	"牡丹江":[129.58,44.6],
	"遵义":[106.9,27.7],
	"绍兴":[120.58,30.01],
	"扬州":[119.42,32.39],
	"常州":[119.95,31.79],
	"潍坊":[119.1,36.62],
	"重庆":[106.54,29.59],
	"台州":[121.420757,28.656386],
	"南京":[118.78,32.04],
	"滨州":[118.03,37.36],
	"贵阳":[106.71,26.57],
	"无锡":[120.29,31.59],
	"本溪":[123.73,41.3],
	"克拉玛依":[84.77,45.59],
	"渭南":[109.5,34.52],
	"马鞍山":[118.48,31.56],
	"宝鸡":[107.15,34.38],
	"焦作":[113.21,35.24],
	"句容":[119.16,31.95],
	"北京":[116.46,39.92],
	"徐州":[117.2,34.26],
	"衡水":[115.72,37.72],
	"包头":[110,40.58],
	"绵阳":[104.73,31.48],
	"乌鲁木齐":[87.68,43.77],
	"枣庄":[117.57,34.86],
	"杭州":[120.19,30.26],
	"淄博":[118.05,36.78],
	"鞍山":[122.85,41.12],
	"溧阳":[119.48,31.43],
	"库尔勒":[86.06,41.68],
	"安阳":[114.35,36.1],
	"开封":[114.35,34.79],
	"济南":[117,36.65],
	"德阳":[104.37,31.13],
	"温州":[120.65,28.01],
	"九江":[115.97,29.71],
	"邯郸":[114.47,36.6],
	"临安":[119.72,30.23],
	"兰州":[103.73,36.03],
	"沧州":[116.83,38.33],
	"临沂":[118.35,35.05],
	"南充":[106.110698,30.837793],
	"天津":[117.2,39.13],
	"富阳":[119.95,30.07],
	"泰安":[117.13,36.18],
	"诸暨":[120.23,29.71],
	"郑州":[113.65,34.76],
	"哈尔滨":[126.63,45.75],
	"聊城":[115.97,36.45],
	"芜湖":[118.38,31.33],
	"唐山":[118.02,39.63],
	"平顶山":[113.29,33.75],
	"邢台":[114.48,37.05],
	"德州":[116.29,37.45],
	"济宁":[116.59,35.38],
	"荆州":[112.239741,30.335165],
	"宜昌":[111.3,30.7],
	"义乌":[120.06,29.32],
	"丽水":[119.92,28.45],
	"洛阳":[112.44,34.7],
	"秦皇岛":[119.57,39.95],
	"株洲":[113.16,27.83],
	"石家庄":[114.48,38.03],
	"莱芜":[117.67,36.19],
	"常德":[111.69,29.05],
	"保定":[115.48,38.85],
	"湘潭":[112.91,27.87],
	"金华":[119.64,29.12],
	"岳阳":[113.09,29.37],
	"长沙":[113,28.21],
	"衢州":[118.88,28.97],
	"廊坊":[116.7,39.53],
	"菏泽":[115.480656,35.23375],
	"合肥":[117.27,31.86],
	"武汉":[114.31,30.52],
	"大庆":[125.03,46.58]
};

//取地图映射数据
function convertData(data){
	//将所有区域存入数组
	let repeatArea = [];
	for(var j=0; j<data.length; j++){
		repeatArea.push(data[j]["城市"]);
	}
	//将区域转集合去重
	let setArea = new Set(repeatArea);
	//将区域转回数组
	let singleArea = Array.from(setArea);
	//console.log(singleArea);
	
	//遍历数据,将相同地区数据相加
	//1.建立与去重城市数据同长度的数组 存储订单数量
	var orderAmount = [];
	orderAmount.length = singleArea.length;
	//记录去重区域长度
	var areaLength = orderAmount.length;
	//console.log(areaLength);
	
	//区域每一项值订单数量初始化0
	for(var i=0; i<orderAmount.length; i++){
		orderAmount[i]=0;
	}
	//遍历json数据,填入订单数量
	for(var i=0; i<data.length; i++){
		for(var j=0; j<areaLength; j++){
			if(singleArea[j] == data[i]["城市"]){
				orderAmount[j] += eval(data[i]["订单数量"]);
			}
		}
	}
	//console.log(orderAmount);
	
	var res = [];//记录经纬度以及值
	//合并城市及城市数据
	//每个城市数据为一个数组
	var cityArea = [];
	cityArea.length = areaLength;
	for(var i=0; i<areaLength; i++){
		//把城市每一项初始为空数组
		cityArea[i] = [];
		//填入城市,总订单数量
		cityArea[i].push(singleArea[i], orderAmount[i]);
		//取经纬度
		var geoCoord = geoCoordMap[cityArea[i][0]];
		//console.log(geoCoord);
		//res.push(geoCoord);
		if(geoCoord){
			//console.log(geoCoord);
			res.push(geoCoord.concat(cityArea[i][1],cityArea[i][0]));
		}	
	}
	//for(var i=0; )
	//console.log(cityArea);
	console.log("map:",res);
	return res;
}

//取饼图值
function pieData(data){
	//取区域
	let area = [];
	for(var i=0; i<data.length; i++){
		area.push(data[i]["区域"]);
	}
	area = new Set(area);
	area = Array.from(area);
	
	//建立嵌套数组
	let source = [];
	source.length = area.length;
	for(var i=0; i<source.length; i++){
		source[i] = [];
		source[i][0] = area[i];
		source[i][1] = 0;
	}
	console.log(source);
	// for(var i=0; i<area.length; i++){
	// 	area
	// }
	console.log(area);
	//取值
	let areaValue = [];
	
	for(var i=0; i<data.length; i++){
		for(var j=0; j<source.length; j++){
			if(area[j] == data[i]["区域"]){
				source[j][1] += eval(data[i]["订单数量"]);
			}
		}
	}
	//console.log(source);
	
	//将数据转成对象数组
	let result = [];
	result.length = source.length;
	for(var i=0; i<result.length; i++){
		result[i] = {};
		result[i]["name"] = source[i][0];
		result[i]["value"] = source[i][1];
	}
	console.log(result);
	return result;
};

//使饼图的每一个数据项不映射visualMap
function noVisual(arr){
	for(var i=0; i<arr.length; i++){
		arr[i]['visualMap'] = false;
	}
	//console.log(arr);
	return arr;
}

//封装地区颜色
function areaColor(){
	//分区不明 勿喷
	//华南
	var south = ["广东", "广西", "海南", "福建", "云南", "贵州"];
	//华东
	var east = ["上海", "江苏", "浙江", "安徽", "江西", "福建","山东","台湾"];
	//华北
	var north = ["北京", "天津", "河北", "山西", "内蒙古"];
	//西北
	var northWest = ["甘肃", "新疆", "青海", "宁夏"];
	//西南
	var southWest = ["重庆", "四川", "贵州", "云南", "西藏"];
	//东北
	var northEast = ["黑龙江", "吉林", "辽宁"];
	//华中
	var middle = ["河南", "湖北", "湖南","陕西"];
	
	var result = [];
	// for(var i=0; i<34; i++){
	// 	result[i] = {};
	// 	result[i]["name"]
	// }
	//
	//单个省份颜色
	function area(arr,color){
		var res = [];
		for(var i=0; i<arr.length; i++){
			res[i] = {};
			res[i]["name"] = arr[i];
			res[i]["itemStyle"] = {"areaColor":color};
			result.push(res[i]);
		}
		//console.log(res);
		return res;
	}
	
	//按地区填充颜色
	//华北 华南 东北 西北 西南 华东
	//['#c52f1b','#fa8e09','#f5cb30','#f85b35','#938bde','#dcaff5']
	area(north,'#c52f1b');
	area(south, '#fa8e09');
	area(northEast, '#f5cb30');
	area(northWest, '#f85b35');
	area(southWest, '#938bde');
	area(east, '#dcaff5');
	area(middle, '#f59348');
	console.log("areaColor:",result);
	return result;	
}

//雷达图数
function layer(data,area){
	//低级 中级 高级 其他
	let region = [];
	//取区域
	for(let i=0; i<data.length; i++){
		region.push(data[i]["区域"]);
	}
	
	//转集合去重
	region = new Set(region);
	//console.log(region);
	//  高级 中级 低级 其它 0 1 2 3
	let bottom = [];
	let middle = [];
	let top = [];
	let another = [];
	for(let i=0; i<data.length; i++){
		if(data[i]["区域"] == area&&data[i]["订单等级"] == "高级"){
			top.push(eval(data[i]["利润额"]));
		}
		if(data[i]["区域"] == area&&data[i]["订单等级"] == "中级"){
			middle.push(eval(data[i]["利润额"]));
		}
		if(data[i]["区域"] == area&&data[i]["订单等级"] == "低级"){
			bottom.push(eval(data[i]["利润额"]));
		}
		if(data[i]["区域"] == area&&data[i]["订单等级"] == "其它"){
			another.push(eval(data[i]["利润额"]));
		}
	}
	// console.log(top);
	// console.log(middle);
	// console.log(bottom);
	// console.log(another);
	//console.log(Math.max(top));
	
	//对象数组法，去除visualMap
	
	//按级求和
	let t=0; let m=0; let b=0; let a=0;
	for(let i = 0;i<top.length; i++){
		t += top[i]
	}
	for(let i=0; i<middle.length; i++){
		m += middle[i];
	}
	for(let i=0; i<bottom.length; i++){
		b += bottom[i];
	}
	for(let i=0; i<another.length; i++){
		a += another[i];
	}
	
	// console.log("高级",t);
	// console.log(m);
	// console.log(b);
	// console.log(a);
	//对象数组法，去除visualMap
	let resObj = [];
	resObj[0] = t;
	resObj[1] = m;
	resObj[2] = b;
	resObj[3] = a;
	// console.log("radar:",resObj);
    return resObj;
}

	
//Sunburst旭日图
//父元素：高中低 其它
//子元素：产品类别
//孙元素：产品子类别
function sunburstData(data,level){
	//取产品类别
	let proCat = []; //productCategory
	//取产品子类别
	let proSecCat = [];	//proScondCategory
	for(let i=0; i<data.length; i++){
		proCat.push(data[i]["产品类别"]);
		proSecCat.push(data[i]["产品子类别"]);
	}
	//去重
	proCat = new Set(proCat);
	proSecCat = new Set(proSecCat);
	//转回数组
	proCat = Array.from(proCat);
	proSecCat = Array.from(proSecCat);
	// console.log(proCat);
	// console.log(proSecCat);
	
	//办公用品，家具用品， 技术产品
	let office = []; let fur = []; let ele = []; 
	for(let i=0; i<data.length; i++){
		if(data[i]["产品类别"] == "办公用品"){
			office.push(data[i]["产品子类别"]);
		}
		if(data[i]["产品类别"] == "家具产品"){
			fur.push(data[i]["产品子类别"]);
		}
		if(data[i]["产品类别"] == "技术产品"){
			ele.push(data[i]["产品子类别"]);
		}
	}
	//去重
	office = new Set(office);
	office = Array.from(office);
	fur = new Set(fur);
	fur = Array.from(fur);
	ele = new Set(ele);
	ele = Array.from(ele);
	
	// console.log("办公",office);
	// console.log("家具产品",fur);
	// console.log("技术",ele);
	
	let officeObj = [];  	officeObj.length = office.length;
	let furObj = [];		furObj.length = fur.length;
	let eleObj = [];		eleObj.length = ele.length;
	for(let i=0; i<office.length; i++){
		officeObj[i] = {};
		officeObj[i]["name"] = office[i];
		officeObj[i]["value"] = 0;
	}
	for(let i=0; i<fur.length; i++){
		furObj[i] = {};
		furObj[i]["name"] = fur[i];
		furObj[i]["value"] = 0;
	}
	for(let i=0; i<ele.length; i++){
		eleObj[i] = {};
		eleObj[i]["name"] = ele[i];
		eleObj[i]["value"] = 0;
	}
	
	
	//计算内层数据订单数量
	//等级 产品类别 产品子类别 名称要相等
	for(let i=0; i<data.length; i++){
		for(let j=0; j<office.length; j++){
			if(level == data[i]["订单等级"] && office[j] == data[i]["产品子类别"]){
				officeObj[j]["value"] += eval(data[i]["订单数量"]);
			}
		}
		for(let j=0; j<fur.length; j++){
			if(level == data[i]["订单等级"] && furObj[j]["name"] == data[i]["产品子类别"]){
				furObj[j]["value"] += eval(data[i]["订单数量"]);
			}
		}
		for(let j=0; j<ele.length; j++){
			if(level == data[i]["订单等级"] && eleObj[j]["name"] == data[i]["产品子类别"]){
				eleObj[j]["value"] += eval(data[i]["订单数量"]);
			}
		}
	}
	// console.log(officeObj);
	// console.log(furObj);
	// console.log(eleObj);
	
	//创建旭日图数据 对象数组
	let res = {};
	res["name"] = level;
	res["children"] = [];
	let sec = res["children"];
	sec.length = proCat.length;
	for(let i=0; i<proCat.length; i++){
		sec[i] = {};
		sec[i]["name"] = proCat[i];
		sec[i]["children"] = [];
	}
	//填入子元素产品子类别
	sec[0]["children"] = officeObj;
	sec[1]["children"] = furObj;
	sec[2]["children"] = eleObj;
	return res;
	console.log(res)
	//填入父元素
}

//按年销售
function yearData(data){
	for(let i=0; i<data.length; i++){
		data[i]["订单日期"] = parseInt(data[i]["订单日期"]);
		}
	//console.log(data);
	return data;
}
