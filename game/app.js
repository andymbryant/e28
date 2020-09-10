let prevGuesses = []
const resultText = document.getElementById("resultText")
const numInput = document.getElementById("numInput")
const submitBtn = document.getElementById("submitBtn")
const guessCount = document.getElementById("guessCount")
const guessList = document.getElementById("guessList")

const min = 1
const max = 100
const playAgain = "Play Again"
const allowedNumGuesses = 10

// Generate random number between min and max values (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function init() {
  num = getRandomInteger(min,max)
  prevGuesses = []
  resultText.innerHTML = "(Result will appear here)"
  guessCount.innerHTML = `(${allowedNumGuesses} left)`
  guessList.innerHTML = "(None)"
  submitBtn.innerText = "Submit"
}

function submit() {
  if (submitBtn.innerText === playAgain) {
    init()
    return
  }
  let guess = parseInt(document.getElementById('numInput').value)
  let text = "Your number is "
  if (prevGuesses.includes(guess)) {
    text = "You've already guessed that number!"
    resultText.innerHTML = text
    numInput.value = ""
    return
  }
  if (guess < min || guess > max) {
    text = `Your guess must be more than ${min} and less than ${max}.`
    resultText.innerHTML = text
    numInput.value = ""
    return
  }
  if (guess < num) {
    text = text + "too low."
  } else if (guess > num) {
    text = text + "too high."
  } else {
    text = "You win!"
    submitBtn.innerText = playAgain
  }
  resultText.innerHTML = text
  numInput.value = ""
  prevGuesses.push(guess)
  guessList.innerHTML = prevGuesses.join(", ")
  const numGuessesRemaining = allowedNumGuesses - prevGuesses.length
  guessCount.innerHTML = `(${numGuessesRemaining} left)`
}

init()