import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},

	mutations: {
		add (state, payload) {
			state.list.push(payload)
		},

		update (state, payload) {
			const index = state.list.findIndex(i => i.id === parseInt(payload.id))
			if (index !== -1) this._vm.$set(state.list, index, payload)
		},

		remove (state, payload) {
			const index = state.list.findIndex(i => i.id === parseInt(payload))
			if (index !== -1) state.list.splice(index, 1)
		}
	},

	actions: {
	},

	getters: {
		getList: state => state.list
	}
})
