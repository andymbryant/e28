const app = Vue.createApp({
  data() {
    return {
      prevGuesses: [],
      range: {
        min: 1,
        max: 100
      },
      numGuessesAllowed: 10
    }
  },
  methods: {
    makeGuess(num) {
      console.log(`makeGuess: ${num}`)
      this.prevGuesses.push(num)
    }
  },
  computed: {
    isGameOver() {
      if (this.prevGuesses.length === this.numGuessesAllowed) {
        return true
      }
      return false
    }
  }
})

app.component('number-input', numberInputOptions)
app.component('guess-display', guessDisplayOptions)

app.mount('#app')