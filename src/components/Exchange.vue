<template>
  <div>
    <h1>Exchange Component</h1>
    <select v-model="selected" v-on:change="getExchange(selected)">
      <option disabled value="">Please select an exchange</option>
      <option v-for="exchange in exchanges" :key="exchange.id">{{ exchange }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Exchange',
  data () {
    return {
      selected: '',
      exchanges: [...ccxt.exchanges],
    }
  },
  methods: {
    getExchange(exchange) {
      this.selected = exchange
      console.log(this.selected)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
