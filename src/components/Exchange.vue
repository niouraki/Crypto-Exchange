<template>
  <div>
    <h1>Exchange Component</h1>
    <select v-model="ExchangeStore" v-on:change="getExchange(ExchangeStore)">
      <option disabled value="">Please select an exchange</option>
      <option v-for="exchange in exchanges" :key="exchange.id">{{ exchange }}</option>
    </select>
  </div>
</template>

<script>
import ExchangeStore from "../stores/ExchangeStore"
const ccxt = require('ccxt')

export default {
  name: 'Exchange',
  data () {
    return {
      ExchangeStore: ExchangeStore.data.myExchange,
      exchanges: [...ccxt.exchanges]
    }
  },
  // when the select input value is changed by the user, this method will get the new value and store it
  methods: {
    getExchange (exchange) {
      ExchangeStore.methods.getExchange(exchange)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
