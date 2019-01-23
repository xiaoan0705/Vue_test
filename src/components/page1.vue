<template>
	<div>
		<p>this is page1</p>
		<div class='con'>
			<ul>
				<li v-for='(item,index) in tabs' 
					:key='index' 
					@click="currentTab=index" 
					:class="['tabs-button',{active1:currentTab==index}]">
					{{item}}
				</li>
			</ul>
			<div class='tabs'>
				<div v-show="currentTab==0">this is php</div>
				<div v-show="currentTab==1">this is javascript</div>
				<div v-show="currentTab==2">this is python</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentTab:0,
				tabs:['php','javascript','python']
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.con{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tabs-button {
	  padding: 6px 10px;
	  border-top-left-radius: 3px;
	  border-top-right-radius: 3px;
	  border: 1px solid #ccc;
	  cursor: pointer;
	  background: #f0f0f0;
	}
	.tabs-button.active1{
		background: #00435E;
		color: #ffffff;
	}
	.tabs {
	  border: 1px solid #ccc;
	  margin: 10px 30px;
	  padding: 20px;
	}
	ul{
		list-style-type: none;
	}
	*{
		padding: 0;
		margin: 0;
	}
</style>