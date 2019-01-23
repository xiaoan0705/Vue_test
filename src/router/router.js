import Vue from 'vue'
import Router from 'vue-router'
import styles from '../components/style.vue';
import decorate from '../components/decorate.vue';
import designer from '../components/designer.vue';
import blog from '../components/blog.vue';
import login from '../components/login.vue';
import footer from '../components/DemoFooter.vue';
import child from '../components/child.vue';
Vue.use(Router)

 const routes=[
	{ path: '/styles', component:styles,
		children:[
			{ path: '/styles/child', component: child}
		]
	},
	{ path: '/', component: decorate },
	{ path: '/designer', component: designer },
	{ path: '/blog', component: blog },
	{ path: '/login', component: login },
	{ path: '/footer', component: footer }
 ]
var router =  new VueRouter({
    routes
})
export default router;

