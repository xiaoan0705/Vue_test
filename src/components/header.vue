<template>
<div class="body" id="body">
	<div class="header">
 		<img src="../../build/logo.png" class="logo">
 		<ul class="nav">
   			<li><router-link to='/App' exact>首页</router-link></li>
   			<li><router-link to='/sendValue'exact>父子传值</router-link></li>
   			<li><router-link to='/todoList' exact>todoList</router-link></li>
   			<li><router-link to='/cycleLife' exact>生命周期</router-link></li>
   			<li><router-link to='/form/foo/form1' exact>form表单</router-link></li>
 		</ul>
 	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.body{
		width:100%;
	}
	.header{
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		flex-shrink: 1;
		background: #00435E;
	}
	.logo{
		width:40px;
		height:40px;
		left:10%;
		padding-top: 10px;
	}
	.nav{
		flex-shrink: 1;
	}
	.nav li{
		display: inline-block;
		box-sizing: border-box;
		text-align: center;
		line-height: 50px;
		list-style-type: none;
	}
	.nav li a{
		display: block;
		padding:10px 30px;
		text-decoration: none;
		color: #ffffff;
	}
	.nav li:hover{
		background:#007BC3;
		color: #000;
	}
	.nav li a.active{
		display:block;
		background: #007BC3;
	}
</style>