<template>
  <div>
    <h1>Pairs Component</h1>
    <select v-model="selected">
      <option disabled value="">Please select a pair</option>
      <option></option>
    </select>
</div>
</template>

<script>
export default {
  name: 'Pairs',
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
