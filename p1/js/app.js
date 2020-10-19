const app = Vue.createApp({
  data() {
    return {
      is_loading: false,
      number_to_guess: 0,
      guesses: [],
      feedback: '',
      range: {
        min: 1,
        max: 100
      },
      winner: false,
      num_guesses_allowed: 10
    }
  },
  methods: {
    async resetGame() {
      this.number_to_guess = this.getRandomInteger(this.range.min, this.range.max)
      this.feedback = 'Make a guess...'
      this.guesses = []
    },
    // Generate random number between min and max values (inclusive)
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    makeGuess(guess) {
      if (this.guesses.includes(guess)) {
        this.feedback = "You've already guessed that!"
      } else if (guess > this.range.max || guess < this.range.min) {
        this.feedback = `Your guess must be between ${this.range.min} and ${this.range.max} (inclusive).`
      } else {
        if (guess > this.number_to_guess) {
          this.feedback = 'Too high'
        } else if (guess < this.number_to_guess) {
          this.feedback = 'Too low'
        } else {
          this.feedback = 'You win!'
          this.winner = true
        }
        this.guesses.push(guess)
        if (this.is_game_over) {
          this.feedback = 'You lose!'
        }
      }
    },
  },
  computed: {
    is_game_over() {
      return this.winner || this.num_guesses_remaining === 0
    },
    num_guesses_remaining() {
      return this.num_guesses_allowed - this.guesses.length
    },
  },
  created() {
    this.is_loading = true
  },
  mounted() {
    this.resetGame()
      .then(() => this.$nextTick(()=> this.is_loading = false))
  }
})

app.component('guess-input', numberInputOptions)
app.component('guess-display', guessDisplayOptions)

app.mount('#app')