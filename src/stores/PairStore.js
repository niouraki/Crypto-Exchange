const PairStore = {
  data: {
    myPair: []
  },
  methods: {
    getPair (pair) {
      PairStore.data.myPair = pair
      console.log(pair)
    }
  }
}

export default PairStore
