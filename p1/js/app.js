const app = Vue.createApp({
  data() {
    return {
      isLoading: false,
      test: false,
      targetNumber: 0,
      guesses: [],
      feedback: '',
      range: {
        min: 1,
        max: 100
      },
      winner: false,
      numGuessesAllowed: 3
    }
  },
  methods: {
    /**
     * Function used to reset the game to initial settings. Can be used to initialize the game.
     */
    async resetGame() {
      this.targetNumber = this.getRandomInteger(this.range.min, this.range.max)
      this.feedback = 'Make a guess...'
      this.guesses = []
    },
    /**
     * Generates a random number between min and max values (inclusive)
     * @param {Number} min the low
     * @param {Number} max
     * @return {Number} random number between min and max values (inclusive)
     */
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    /**
     * Executes the logic for making a guess in this game.
     * @param {Number} guess the number guessed by the user
     */
    makeGuess(guess) {
      // Check if previous guesses include current guess
      if (this.guesses.includes(guess)) {
        this.feedback = "You've already guessed that!"
        // Check if guess is within the acceptable range
      } else if (guess > this.range.max || guess < this.range.min) {
        this.feedback = `Your guess must be between ${this.range.min} and ${this.range.max} (inclusive).`
        // If number is acceptable
      } else {
        // Give correct feedback to user, i.e. high or low
        if (guess > this.targetNumber) {
          this.feedback = 'Too high'
        } else if (guess < this.targetNumber) {
          this.feedback = 'Too low'
        } else {
          // If the guess is correct, end the game
          this.feedback = 'You win!'
          this.winner = true
        }
        // Add guess to previous guesses
        this.guesses.push(guess)
        // Check if game is over and provide feedback
        if (this.isGameOver) {
          this.feedback = `You lose! The number was ${this.targetNumber}.`
        }
      }
    },
  },
  computed: {
    // The game is over if the user runs out of guesses or if they are declared a winner
    isGameOver() {
      return this.winner || this.numGuessesRemaining === 0
    },
    numGuessesRemaining() {
      return this.numGuessesAllowed - this.guesses.length
    },
  },
  created() {
    this.isLoading = true
  },
  mounted() {
    this.resetGame()
      .then(() => this.$nextTick(()=> this.isLoading = false))
  }
})

// Register components globally
app.component('guess-input', numberInputOptions)
app.component('guess-display', guessDisplayOptions)

app.mount('#app')