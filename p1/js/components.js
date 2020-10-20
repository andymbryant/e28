// Options for the two components in the game

// This component is responsible for the number input, i.e. the interface for users to make a guess
// It simply takes in a number and emits a makeGuess event to the app component
const numberInputOptions = {
  template: '#guess-input',
  props: {
    isGameOver: {
      type: Boolean,
      required: true
    },
    guesses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      guess: null,
    }
  },
  methods: {
    submit() {
      this.$emit('makeGuess', this.guess)
      this.guess = null
    },
    resetGame() {
      this.$emit('resetGame')
    }
  }
}

// This component is responsible for displaying guess-related information (except for user feedback)
const guessDisplayOptions = {
  template: '#guess-display',
  props: {
    isGameOver: {
      type: Boolean,
      required: true,
    },
    guesses: {
      type: Array,
      required: true
    },
    numGuessesRemaining: {
      type: Number,
      required: true
    }
  },
  computed: {
    resultText() {
      return this.guessesString
    },
    previousGuessesString() {
      return this.guesses.length ? this.guesses.join(', ') : '(your guesses will appear here)'
    },
  }
}