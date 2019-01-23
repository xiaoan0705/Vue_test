import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);//使用vuex

const store=new Vuex.Store({
	state:{//状态管理
		count:0
	},
	mutations:{//状态方法集
		increase(){
			this.state.count++;
		},
		decrease(){
			this.state.count--;
		}
	},
	actions:{
		
	}
});
export default store;