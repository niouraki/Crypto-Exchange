<template>
  <div>
    <h1>Trades Component</h1>
    <table>
      <tr>
        <th>Size</th>
        <th>Price</th>
        <th>Time</th>
      </tr>
      <tr v-for="trade in trades" :key="trade.id">
        <td v-text="trade.amount"></td>
        <td v-text="trade.price"></td>
        <td v-text="trade.datetime"></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Trades',
  computed: {
    trades () {
      return this.$store.state.trades
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
