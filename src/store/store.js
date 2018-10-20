import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ccxt = require('ccxt')
// here I define the data of my app
export default new Vuex.Store({
  state: {
    exchanges: [...ccxt.exchanges],
    exchange: '',
    pairs: [],
    pair: ''
  },
  mutations: {
    receiveExchange (state, payload) {
      state.exchange = payload
      console.log(state.exchange)
    },
    getMarkets (state, payload) {
      state.pairs = payload
      console.log(state.pairs)
    },
    getPair (state, payload) {
      state.pair = payload
      console.log(state.pair)
    }
  },
  actions: {
    async getMarkets ({commit, state}, exchange) {
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      let newExchange = new ccxt[state.exchange]({ 'proxy': proxy })
      let pairs = await newExchange.loadMarkets()
      commit('getMarkets', pairs)
    },
    receiveExchange ({commit}, exchange) {
      commit('receiveExchange', exchange)
    }
  }
})
