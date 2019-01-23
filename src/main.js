import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import $ from 'jquery';

import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

import store from '@/store';
import App from './App'
import sendValue from './components/sendValue.vue';
import todoList from './components/todoList.vue';
import cycleLife from './components/cycleLife.vue';
import form from './components/form.vue';
import form1 from './components/form1.vue';
import form2 from './components/form2.vue';
import footer from './components/footer.vue';
import child from './components/child.vue';
import header from './components/header.vue';
import vueRouterPlay from './components/vueRouterPlay.vue';
import dataBind from './components/dataBind.vue';
import grid from './components/kendo/grid.vue';
import chart from './components/kendo/chart.vue';

import page1 from './components/page1.vue';
import page2 from './components/page2.vue';
import page3 from './components/page3.vue';

//定义路由
const routes = [
	{ path: '/',redirect:'App' },//路由重定向。设置页面一进来就显示的页面，即重定向到App组件，这里写的内容是对应组将的component的值
	{ path: '/App',component:App },
	{ path: '/sendValue', component:sendValue},
	{ path: '/todoList', component: todoList},
	{ path: '/cycleLife', component: cycleLife,
		beforeEnter(to,from,next){
			console.log('跳到生命周期页');
			console.log('路由独享守卫');
			console.log(to,from);
			next()
		}
	},
	{ path: '/form/:id', component: form,
		children:[
		    // 当 /blog/:id/blog1 匹配成功，
            // blog1 会被渲染在blog的 <router-view> 中
			{
				path:'form1',component:form1
			},
			// 当 /blog/:id/blog2 匹配成功，
            // blog2 会被渲染在blog的 <router-view> 中
			{
				path:'form2',component:form2,name:'subForm'
			}
		]
	},//动态路由
	{ path: '/footer', component: footer },
	{ path: '/header', component: header },
	{ path:'/grid', component:grid },
	{ path:'/chart', component:chart },
	{ path:'/vueRouterPlay/:id',component:vueRouterPlay},
	{ path:'/dataBind',component:dataBind},
	{ path:'/child',component:child},
	{ path:'/page1',component:page1},
	{ path:'/page2',component:page2},
	{ path:'/page3',component:page3}
]
//创建 router 实例，然后传 routes 配置
const router=new VueRouter({
	mode:'history',//当你使用 history 模式时，URL 就像正常的 url
	routes,
	linkActiveClass: 'active'
});
//创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
new Vue({
	el:"#app",
	router,
	store//全局注入，在任何一个组件里面使用this.$store了
});




