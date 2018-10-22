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
html, body{
    margin: 0px;
    padding: 0px;
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 100%;
}
</style>
