const ExchangeStore = {
  data: {
    myExchange: ''
  },
  methods: {
    getExchange (exchange) {
      ExchangeStore.data.myExchange = exchange
      console.log(ExchangeStore.data.myExchange)
    }
  }
}

export default ExchangeStore
