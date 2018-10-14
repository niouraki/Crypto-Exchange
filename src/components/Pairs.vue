<template>
  <div>
    <h1>Pairs Component</h1>
    <select v-model="selected" v-on:change="getPair(selected)">
      <option disabled value="">Please select a pair</option>
      <option v-for="pair in pairs" :key="pair.id">{{ pair.symbol }}</option>
    </select>
  </div>
</template>

<script>
async function getMarkets () {
  let acx = new ccxt.acx()
  let markets = await acx.load_markets()
  return markets
};

let pairs = getMarkets()
console.log(pairs)

export default {
  name: 'Pairs',
  data () {
    return {
      selected: '',
      pairs
    }
  },
  ////when the select input value is changed by the user, this method will get the new value and store it
  methods: {
    getPair(pair) {
      this.selected = pair
      console.log(this.selected)
    }
  },
  mounted () {
    getMarkets().then(markets => this.pairs = markets)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
