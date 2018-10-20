<template>
  <div>
    <h1>Pairs Component</h1>
    <select :value="pair" v-on:change="getPair">
      <option v-for="pair in pairs" v-bind:value="pair" :key="pair.id"> {{ pair }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Pairs',
  data () {
    return {
    }
  },
  computed: {
    pairs () {
      return this.$store.state.pairs
    },
    pair () {
      return this.$store.state.pair
    }
  },
  // when the select input value is changed by the user, this method will get the new value and store it
  getPair (e) {
    let pair = e.target.value
    this.$store.commit('getPair', pair)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
