/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-10 12:24:55
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations
})
