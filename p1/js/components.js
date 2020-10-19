const numberInputOptions = {
  template: '#guess-input',
  props: {
    is_game_over: {
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
      this.$emit('make_guess', this.guess)
      this.guess = null
    },
    resetGame() {
      this.$emit('reset_game')
    }
  }
}

const guessDisplayOptions = {
  template: '#guess-display',
  props: {
    is_game_over: {
      type: Boolean,
      required: true,
    },
    guesses: {
      type: Array,
      required: true
    },
    num_guesses_remaining: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    resultText() {
      return this.guessesString
    },
    previous_guesses_string() {
      return this.guesses.length ? this.guesses.join(', ') : '(Previous guesses will appear here)'
    },
  },
  mounted() {

  },
}