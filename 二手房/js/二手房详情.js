function getQuery(){
	var str = (window.location.search.length > 0 ?window.location.search.substring(1) : ''),

				args = {},
				items = str.length ? str.split("&") : [],
				item = null,
				name = null,
				value = null;
				for (i=0; i < items.length; i++){
					item = items[i].split("=");
					name = decodeURIComponent(item[0]);
					value = decodeURIComponent(item[1]);
					if (name.length) {
						args[name] = value;
					}
				}
				console.log(window.location.search),
				console.log(items)
				return args;
}






var house=new Vue({
	el:'#app',
	data:{
		house_info:{},
		isshow:true,
		isshowrent:false,
		isselected:true,
		selected:false,
		city:"吉林",

		land:"昌平区，西三旗",
		land1:"                距离地铁8号线700米"
	},
	mounted:function(){
		this.swiper();
		this.getlist();
		// this.map()
	},
	methods:{
		rent:function(){
			this.selected=true;
			this.isshowrent=true;
			this.isselected=false;
			this.isshow=false;

		},
		buy:function(){
           this.selected=false;
			this.isshowrent=false;
			this.isselected=true;
			this.isshow=true;
		},
		swiper:function(){
			var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop:false,
			// autoplay:true,
			pagination: {
		    el: '.swiper-pagination',
		    type: 'fraction',
		  },
		})
		},
		getlist:function(){
            var that=this
            var houseId=getQuery().id
            $.ajax({
            	url:"http://lianjia.com/api/ershoufang/info",
            	type:"get",
            	dataType:"json",
            	data:{
            		id:houseId,
            	},
            	success:function(res){
            		that.house_info=res.data.house_info

            	},
            })
		},
		// map:function(){
		// 	var map = new BMap.Map("allmap");    // 创建Map实例
		// 	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		// 	//添加地图类型控件
		// 	var map = new BMap.Map("allmap");
		// 	var point = new BMap.Point(116.400244,39.92556);
		// 	map.centerAndZoom(point, 12);
		// 	var marker = new BMap.Marker(point);  // 创建标注
		// 	map.addOverlay(marker);              // 将标注添加到地图中

		// 	var label = new BMap.Label("this.land",{offset:new BMap.Size(20,-10)});
		// 	marker.setLabel(label);       // 设置地图显示的城市 此项是必须设置的
  //   },
	},
})