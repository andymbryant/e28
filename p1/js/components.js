const numberInputOptions = {
  props: {
    isGameOver: Boolean
  },
  data() {
    return {
      guess: 0
    }
  },
  methods: {
  },
  computed: {
    submitButtonText() {
      return this.isGameOver ? 'Play Again' : 'Submit'
    }
  },
  template: '#number-input',
  mounted() {
    console.log(this.isGameOver)
  }
}

const guessDisplayOptions = {
  // props: {
  //   isGameOver: Boolean,
  //   prevGuesses: Array
  // },
  data() {
    return {
      test: true
    }
  },
  methods: {
  },
  computed: {
    resultText() {
      return ''
      // console.log(this.prevGuesses)
      // return this.prevGuesses.join(', ')
    }
  },
  template: '#guess-display',
  mounted() {
    console.log('guess-display mounted')
  }
}