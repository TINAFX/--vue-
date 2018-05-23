var house=new Vue({
	el:'#app',
	data:{
		house_lists:[],
		tab:[],
		region:[],
		house_type:[],
		orientation:[],
        tablist:[],
        area:'区域',
        cityshow:false,
        position:false,
		fixed:true,
		isshow:false,
        isselected:false,

		isshowarea:false,//区域
		bgselectarea:false,
		selectarea:false,
		bg1:true,
		showarea:true,//区域
        bg2:false ,
        searcharea:null,
		showSubway:false,//地铁
		

		isshowprice:false,//价格
		searchprice:null,
        bgselectprice:false,
        selectprice:false,

		isshowhousetype:false,//类型
		searchhousetype:null,
		bgselecthousetype:false,
		selecthousetype:false,


		isshowmore:false,//更多
		searchmore:null,
		bgselectmore:false,
		selectmore:false,

	},
	mounted:function(){
       this.swiper();
       this.getData();
       this.getlist();
	},
	methods:{
		getData:function(){
			var that =this
			$.ajax({
				url:"http://lianjia.com/api/ershoufang/index",
				dataType:"json",
				type:"get",
				data:{},
				success:function(res){
                   that.house_lists=res.data.house_lists;
                   that.tab=res.data.house_lists.tab
				}

			})
		},
		getlist:function(){
            var that=this
            $.ajax({
            	url:"http://lianjia.com/api/ershoufang/condition",
            	dataType:"json",
				type:"get",
				data:{},
				success:function(res){
					res.data.region.forEach(function(item){
						item.isselect=false
					})
					res.data.tab.forEach(function(item){
						item.isselect=false
					})
					res.data.house_type.forEach(function(item){
						item.isselect=false
					})
					res.data.orientation.forEach(function(item){
						item.isselect=false
					})
					that.region=res.data.region
					that.tablist=res.data.tab
					that.house_type=res.data.house_type
					that.orientation=res.data.orientation
				}
            })
		},
		swiper:function(){
			var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop:true,
			autoplay:true,
			pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		  },
		})
		},
		area:function(){
			this.bgselectarea=true;
			this.bgselectprice=false;
			this.bgselecthousetype=false;
			this.bgselectmore=false;
			this.fixed=false
		   this.isshow=true;
           this.isshowarea=true;
           this.isshowprice=false
           this.isshowhousetype=false
           this.isshowmore=false
		},
		price:function(){
			this.bgselectarea=false;
			this.bgselectprice=true;
			this.bgselecthousetype=false;
			this.bgselectmore=false;
			this.fixed=false;
			  this.isshow=true;
               this.isshowarea=false;
               this.isshowprice=true
               this.isshowhousetype=false
               this.isshowmore=false

		},
		housetype:function(){
			this.bgselectarea=false;
			this.bgselectprice=false;
			this.bgselecthousetype=true;
			this.bgselectmore=false;
			this.fixed=false
			   this.isshow=true;
               this.isshowarea=false;
               this.isshowprice=false
               this.isshowhousetype=true
               this.isshowmore=false

		},
		more:function(){
			this.bgselectarea=false;
			this.bgselectprice=false;
			this.bgselecthousetype=false;
			this.bgselectmore=true;
			this.fixed=false
		   this.isshow=true;
           this.isshowarea=false;
           this.isshowprice=false
           this.isshowhousetype=false
           this.isshowmore=true

		},
		navEara:function(){
			this.bg1=true;
			this.bg2=false;
			this.showarea=true;
			this.showSubway=false

		},
		navSubway:function(){
			this.bg1=false;
			this.bg2=true;
           this.showarea=false;
		   this.showSubway=true
		},
		
		clickItem:function(item,ctem){
			  this.region.forEach(function(t){
						t.isselect=false;

					})
			item.isselect=true;
			item.isselected=true;
			if(this.isshowarea){
				
				console.log(this.isselected)
				this.isshow=false;
				this.selectarea=true;
				console.log(this.isshowarea)
				 this.$refs.tip.innerHTML=item.name
				  this.$refs.tips.innerHTML=item.name
			}
			if(this.isshowmore){
				this.selectmore=true;
			}
		},
		check:function(item){
          item.isselect=true;
          this.selecthousetype=true;
		},
        yes:function(item){
          this.isshow=false;
          console.log(this.house_type)
          if(this.isshowhousetype){

          	for(var i=0;i<this.house_type.length;i++)
          		{
          			this.bgselecthousetype =true
	          		 this.$refs.mod.innerHTML="多选"
	          		 this.$refs.mods.innerHTML="多选"
          		}
          	     
          
          }
        },
        clearall:function(t){
        	this.orientation.forEach(function(t){
						t.isselect=false
					})
        	this.tablist.forEach(function(t){
						t.isselect=false
					})
            this.isshow=false
            this.selectmore=false;
        },
        city:function(item,ctem,c){
         
         this.position=true;
         // console.log(this.region.region2)
         this.region.forEach(function(c){
						c.cityshow=false;
						c.isselect=false;
					})

         item.isselect=true;
         item.cityshow=true;
        }
	}
})
