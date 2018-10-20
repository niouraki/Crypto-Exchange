import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ccxt = require('ccxt')
// here I define the data of my app
export const store = new Vuex.Store({
  strict: true,
  state: {
    exchanges: [...ccxt.exchanges],
    exchange: '',
    pairs: [],
    pair: ''
  },
  mutations: {
    getExchange (state, payload) {
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
    async getMarkets (commit, state) {
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      let exchange = new ccxt[state.exchange]({ 'proxy': proxy })
      let pairs = await exchange.loadMarkets()
      commit('getMarkets', pairs)
    }
  }
})
