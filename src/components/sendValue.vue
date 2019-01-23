<template>
 <div>
 	 <header1></header1>
     <h2>This is sendVaule components</h2>
     <hr/>
     <p>获取公共的count变量:{{count}}</p>

	 <br>
	 <button @click="eventFn($event)">事件对象</button>
	 <br>
	 <!--可以向子组件传递属性、方法以及该组件的整个实例-->
 	 <p>父组件style与子组件child之间互相传值</p>
 	 <child :msg='msg' :run='run' :home=this v-on:sendVal='showMsgFromChild'></child>
 	 
 </div>
</template>
<script>
 import header1 from './header.vue';
 import child from './child.vue';
 export default{
 	components:{
		header1,
		child
	},
    data(){
        return {
           msg:'从父组件sendValue.vue传来的值',
           count:this.$store.state.count
        }
    },
    methods:{
    	eventFn(e){
    		console.log(e);
    		e.srcElement.style.background='#ee2c2c';
    	},
    	run(){
			alert('我是父组件App.vue传过来的方法');
		},
		showMsgFromChild(data){
			alert(data);
		}
    }
 }
</script>
