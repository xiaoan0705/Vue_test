<template>
<div class='con'>
	<header1></header1>
 	<div class="content">
 		<div class='c-nav'>
 			<ul class='bar'>
 				<li @click="bar0()" :class="{'active':bar==0}">路由route</li>
 				<li @click="bar1()" :class="{'active':bar==1}">kendo</li>
 				<li @click="bar2()" :class="{'active':bar==2}">指令</li>
 				<li @click="bar3()" :class="{'active':bar==3 }">vuex状态管理</li>
 				<li @click="bar4()" :class="{'active':bar==4}">动态切换组件</li>
 			</ul>
 		</div>
 		<div class='c-con'>
 			<div v-show="bar==0">
 				<h4>（1）动态路由</h4>
		 		<router-link to='/form/f1/form1'>/form/:f1/form1</router-link><!--其中b1为参数，blog1为子页面-->
		 		<router-link to='/form/f2/form2'>/form/:f2/form2</router-link>
		 		<br/>
		 		<br>
		 		<h4>（2）路由跳转</h4>
		 		<button @click="$router.push('/vueRouterPlay/1')">跳到router页</button>
 			</div>
 			<div v-show="bar==1">
 				<h4>（1）显示kendo</h4>
		 		<div class="kendoStyle">
					<router-link to='/grid'><button>表格grid</button></router-link>
					<router-link to='/chart'><button>图表chart</button></router-link>
		 		</div>
 			</div>
	 		<div v-show="bar==2">
	 			<h4>（1）自定义指令</h4>
		 		<input v-bind-element v-model='msg'/>
		 		<p>获取输入框数据：{{msg}}</p>
		 		<h4 v-bind-element='34'>6</h4>
		 		<dataBind></dataBind>
	 		</div>
	 		<div v-show="bar==3">
	 			<h4>（1）状态管理vuex</h4>
	 			<button @click="increase()">添加</button>
	 			<button @click="decrease()">减少</button>
	 			{{count}}
	 		</div>
	 		<div v-show="bar==4">
	 			<button v-for='(item,index) in tabs' :key='index' @click="currentTab=item" :class="['tab-button',{active1:currentTab==item}]">{{item}}</button>
	 			<br/>
	 			<keep-alive>
	 				<component v-bind:is="currentTabComponent" class="tab"></component>
	 			</keep-alive>
	 			
	 		</div>
 		</div>
 		
 	</div>
 	<!--<footer1>
 		<h5>版权归@xiaoan科技所有</h5>
 	</footer1>-->
</div>
</template>

<script>
	import header1 from './components/header.vue';
	import footer1 from './components/footer.vue';
	import dataBind from './components/dataBind.vue';
	import page1 from './components/page1.vue';
	import page2 from './components/page2.vue';
	import page3 from './components/page3.vue';
	
	export default{
		components:{
			header1,
			footer1,
			dataBind,
			page1,
			page2,
			page3
		},
		data(){
			return{
				gridShow:false,
				bar:2,
				msg:'',
				count:0,
				currentTab:'page1',
				tabs:['page1','page2','page3']
			}
		},
		methods:{
			bar0(){
				this.bar=0;
			},
			bar1(){
				this.bar=1;
			},
			bar2(){
				this.bar=2;
			},
			bar3(){
				this.bar=3;
			},
			bar4(){
				this.bar=4;
			},
			increase(){
				console.log('increase count');
				this.$store.commit('increase');
				this.count=this.$store.state.count;
			},
			decrease(){
				console.log('decrease count');
				this.$store.commit('decrease');
				this.count=this.$store.state.count;
			}
		},
		//监听msg的变化
		watch:{
			msg:function(newval,oldval){
				console.log('newval is'+newval);
				console.log('oldval is'+oldval);
			}
		},
		computed:{
			currentTabComponent:function(){
				console.log(this.currentTab);
				return this.currentTab;
			}
		},
		//自定义局部指令
		directives:{
			//在此处指令名采用驼峰式
			bindElement:{
				//钩子函数
				bind:function(el,bindings){
				//聚焦元素
				console.log('指令已经绑定到元素了');
				console.log(el);
				console.log(bindings);
				el.innerHTML=bindings.value;
			    },
				inserted:function(el){
					el.focus();//使页面加载完成后输入框聚焦
				}
			}
		}
	}
</script>
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.con{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.content{
		width:80%;
		height:auto;
		padding-top: 100px;
		padding-bottom: 100px;
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		align-items:flex-start;
		margin: 0 auto;
	}
	.c-con{
		margin-left: 50px;
	}
	.kendoStyle{
		border: solid 1px #002E79;
		width: 200px;
		padding: 10px;
		display: inline-block;
		margin: 10px;
	}
	.bar{
		width: 150px;
		border: solid 1px #00435E;
		text-align: center;
		list-style: none;
	}
	.bar li{
		padding: 10px 0;
		cursor: pointer;
		text-decoration: none;
		border: 1px solid #00435E;
	}
	.bar li.active{
		background: #00435E;
		color: #ffffff;
	}
	.tab-button {
	  padding: 6px 10px;
	  border-top-left-radius: 3px;
	  border-top-right-radius: 3px;
	  border: 1px solid #ccc;
	  cursor: pointer;
	  background: #f0f0f0;
	  margin-bottom: -1px;
	  margin-right: -1px;
	}
	.tab-button.active1{
		background: #ee2c2c;
	}
	.tab {
	  border: 1px solid #ccc;
	  padding: 10px;
	}
</style>