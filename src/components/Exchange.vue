<template>
  <div>
    <h1>Exchange Component</h1>
    <select :value="exchange" v-on:change="getExchange">
      <option disabled value="">Please select an exchange</option>
      <option v-for="exchange in exchanges" v-bind:value="exchange" :key="exchange.id">{{ exchange }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Exchange',
  data () {
  },
  computed: {
    exchanges () {
      return this.$store.state.exchanges
    },
    exchange () {
      return this.$store.state.exchange
    }
  },
  // when the select input value is changed by the user, this method will get the new value and store it
  methods: {
    ...mapActions(['getMarkets', 'getExchange']),
    getExchange (e) {
      let exchange = e.target.value
      this.$store.commit('getExchange', exchange)
      this.getMarkets()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
