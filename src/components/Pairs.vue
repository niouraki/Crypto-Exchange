<template>
  <div>
    <h1>Pairs Component</h1>
    <select v-model="PairStore.data" v-on:change="getPair(pair)">
      <option disabled value="">Please select a pair</option>
      <option v-for="pair in PairStore.data" :value="pair.symbol" :key="pair.id">{{ pair.symbol }}</option>
    </select>
  </div>
</template>

<script>
import ExchangeStore from "../stores/ExchangeStore"
import PairStore from "../stores/PairStore"

export default {
  name: 'Pairs',
  data () {
    return {
      PairStore: PairStore.data,
      ExchangeStore: ExchangeStore.data
    }
  },
  computed: {
    getMarkets () {
      (async () => {
        const ccxt = require('ccxt')
        let exchange = new ccxt[ExchangeStore.data.myExchange]({ 'proxy': 'https://cors-anywhere.herokuapp.com/' })
        let markets = await exchange.loadMarkets().then(markets => PairStore.data.myPair = markets)
        return markets
      })()
    }
  },
  // when the select input value is changed by the user, this method will get the new value and store it
  methods: {
    getPair (pair) {
      PairStore.methods.getPair(pair)
    }
  },
  mounted () {
    this.getMarkets
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
