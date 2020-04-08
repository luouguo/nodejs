import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 集中状态
const state = {
	userInfo: null, //用户信息
	login:false,  //用户是否登录
	categorys:[
		['life','生活感想'],
		['ticket','旅行日记'],
		['play','吃喝玩乐'],
		['it','技术交流'],
	]
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})