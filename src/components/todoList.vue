<template>
 <div>
 	 <header1></header1>
     <p>实现todoList功能</p>
     <hr>
     <input type="text" v-model="todo"/>
     <button @click="addList()">+添加</button>
     <hr>
     <p>待办任务</p>
     <ul>
     	<li v-for='(item,index) in list' v-if='item.checked==false'>
     		<input type="checkbox" v-model="item.checked" @change="changeList()"/>{{item.title}}---<button @click='deleteList(index)'>删除</button>
     	</li>
     </ul>
     <hr>
     <p>已完成</p>
     <ul>
     	<li v-for='(item,index) in list' v-if='item.checked==true'>
     		<input type="checkbox" v-model="item.checked" @change="changeList()"/>{{item.title}}---<button @click='deleteList(index)'>删除</button>
     	</li>
     </ul>
 </div>
</template>
<script>
import header1 from './header.vue';
 export default{
 	 name: 'app',
 	components: {
 	header1
 	},
     data(){
         return {
             todo:'',
             list:[]
         }
     },
     methods:{
     	addList(){
     		this.list.push({
     			'title':this.todo,
     			'checked':false
     		});
     		this.todo='';
     		//每次刷新后保留之前的数据
     		localStorage.setItem('list',JSON.stringify(this.list));
     	},
     	deleteList(index){
     		this.list.splice(index,1);
     		localStorage.setItem('list',JSON.stringify(this.list));
     	},
     	changeList(){
     		localStorage.setItem('list',JSON.stringify(this.list));
     	}
     },
     mounted(){/*生命周期函数，每次刷新时调用*/
     	var storeList=JSON.parse(localStorage.getItem('list'));
     	if(storeList){
     		this.list=storeList;
     	}
     }
 }
</script>