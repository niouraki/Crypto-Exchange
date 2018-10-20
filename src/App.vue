<template>
  <div id="app">
    <Exchange/>
    <Pairs/>
    <Trades/>
  </div>
</template>

<script>
import Exchange from './components/Exchange'
import Pairs from './components/Pairs'
import Trades from './components/Trades'

export default {
  name: 'App',
  components: {
    Exchange,
    Pairs,
    Trades
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
