<template>
	<div>
		<header1></header1>
		<div class="display">
			<p>我是blog.vue</p>
			<p>接收参数{{$route.params.id}}</p>
			<!--通过接受不同的参数，在router中显示不同的页面内容-->
			<router-view></router-view>
			<hr/>
			<div class="align">
				<span>选择信息，单选框:</span>
				<input type="checkbox" id="name" v-model="checked"/>
				<label for="name">{{checked}}</label>
				<p>其他信息</p>
				<input type="checkbox" id="sex" value="性别" v-model="checkothers">
				<label for="sex">性别</label>
				<input type="checkbox" id="age" value="年龄" v-model="checkothers">
				<label for="age">年龄</label>
				<input type="checkbox" id="weight" value="体重" v-model="checkothers">
				<label for="weight">体重</label>
				<p>{{checkothers}}</p>
				<br>
				<p>单选按钮</p>
				<input type="radio" id='one' value="one" v-model="picked"/>
				<label for="one">One</label>
				<input type="radio" id='two' value="two" v-model="picked"/>
				<label for="two">Two</label>
				<br>
				<span>picked:{{picked}}</span>
				<span>学历选择框</span>
				<select v-model="selected" style="width: 100px;">
					<option>高中</option>
					<option>大专</option>
					<option>本科</option>
					<option>硕士</option>
				</select>
				<p>学历为：{{selected}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import header1 from './header.vue'
	export default{
		components:{
			header1
		},
		data () {
        return {
        	checked:true,
        	checkothers:[],
        	picked:'',
        	selected:''
        };
   	 },
    methods: {

    	}
	}
</script>

<style>
	.display{
		width:100%;
		height: auto;
	}
	.align{
		margin-left: 40%;
	}
</style>