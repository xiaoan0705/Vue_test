<template>
	<div>
		<header1></header1>
		<div  class="display">
			<p>我是cycleLife.vue</p>
			<hr>
			<p>生命周期函数</p>
		</div>
	</div>
</template>

<script>
	import header1 from './header.vue';
	export default{
		components:{
		 header1
		},
		data () {
        	return {
			
        	};
   	 	},
    	methods: {
    	},
    	beforeCreate(){
		 	console.log('实例刚刚被创建1');
		},
		created(){
			console.log('实例已创建完成2');
		},
		beforeMount(){
			console.log('模板编译之前3');
		},
		mounted(){
			console.log('模板编译完成4');
		},
		beforeUpdate(){
			console.log('数据更新之前5');
		},
		updated(){
			console.log('数据更新完成6');
		},
		beforeDestory(){
			console.log('实例销毁之前');
		},
		destored(){
			console.log('实例销毁完成');
		}
	}
</script>

<style>
</style>