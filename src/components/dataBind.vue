<template>
	<div>
		<!--MVVM实现数据双向绑定
     	model改变会影响试图(set数据)，试图改变会影响model(get数据)
     -->
     	<h4>（2）v-model数据绑定</h4>
	    <label>用户名：</label>
		<input type="text" v-model="name"/>
		<button v-on:click="getname()">获取表单内容</button>
		<button @click="setname()">设置表单内容</button>
		<p>显示输入框内容：{{name}}</p>
		<br/>
		<h4>（3）ref属性获取dom节点</h4>
		 <!--ref获取dom节点-->
		<input type="text" ref='sexValue'/>
		<button v-on:click="getInputValue()">获取输入框的内容</button>
		<div ref='boxValue' value='我是div'>我是div</div>
		<button v-on:click="getBoxValue()">获取div的内容</button>
	     <br>
	     <h4>（4）v-for循环列表</h4>
		 <button v-on:click="addlist()">循环列表</button>
		 <ul>
		 	<li v-for="(item,index) in list">
		 		{{index}}---{{item}}
		 	</li>
		 </ul>
	</div>
</template>

<script>
export default{
 	components:{
	},
    data(){
        return {
           name:'anan',
           list:[],
        }
    },
    methods:{
    	getname(){
    		alert(this.name);
    	},
    	setname(){
    		this.name='改变后的数据'
    	},
    	getInputValue(){
    		console.log(this.$refs.sexValue);
    		alert(this.$refs.sexValue.value);
    	},
    	getBoxValue(){
    		console.log(this.$refs.boxValue);
    	},
    	addlist(){
    		for(var i=0;i<5;i++){
    			this.list.push('我是第'+i+'条数据');
    		}
    	},
    }
 }
</script>

<style>
</style>