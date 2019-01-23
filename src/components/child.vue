<template>
	<div class="display">
		<p>我是嵌套在decorate.vue里的child.vue</p>
		<p>{{msg}}</p>
		<button @click="run">执行方法</button>
		<button @click="getAll()">获取父组件的整个实例</button>
		<br/>
		<button @click="submitChildValue()">submit</button>
	</div>
</template>

<script>
	export default{
		props:[
			'msg','run','home'
		],
		data () {
	        return {
				subMsg:'接收子组件child.vue传来的值'
	        };
   	    },
    	methods:{
			getAll(){
				alert(this.home.msg);
				this.home.run();
			},
			submitChildValue(){
				//向父组件style传值
				this.$emit('sendVal',this.subMsg);
			}
    	}
	}
</script>

<style>
	.display{
		width:50%;
		height: 400px;
		border: solid 1px #808080;
	}
</style>