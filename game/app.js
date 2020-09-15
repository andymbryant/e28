let prevGuesses = []
const min = 1
const max = 100
const allowedNumGuesses = 10
const playAgainStr = "Play Again"

const resultText = document.getElementById("resultText")
const numInput = document.getElementById("numInput")
const submitBtn = document.getElementById("submitBtn")
const guessCount = document.getElementById("guessCount")
const guessList = document.getElementById("guessList")

// Generate random number between min and max values (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function init() {
  num = getRandomInteger(min,max)
  prevGuesses = []
  resultText.innerHTML = "(Result will appear here)"
  guessCount.innerHTML = `(${allowedNumGuesses} left)`
  guessList.innerHTML = ""
  submitBtn.innerText = "Submit"
}

function submit() {
  // If player chooses to start a new game, init game
  if (submitBtn.innerText === playAgainStr) {
    init()
    return
  }
  // Get guess from player
  let guess = parseInt(document.getElementById('numInput').value)
  let text = "Your number is "

  // If player guesses the same number as a previous turn
  if (prevGuesses.includes(guess)) {
    text = "You've already guessed that number!"
    resultText.innerHTML = text
    numInput.value = ""
    return
  }
  // If player guesses a number that is outside the acceptable number range
  if (guess < min || guess > max) {
    text = `Your guess must be more than ${min} and less than ${max}.`
    resultText.innerHTML = text
    numInput.value = ""
    return
  }
  // Give player feedback based on guess
  if (guess < num) {
    text = text + "too low."
  } else if (guess > num) {
    text = text + "too high."
  } else {
    text = "You win!"
    submitBtn.innerText = playAgainStr
  }
  // Reset input value
  numInput.value = ""
  // Add guess to previous guess list and display
  prevGuesses.push(guess)
  guessList.innerHTML = prevGuesses.join(", ")
  // Display number of guesses remaining
  const numGuessesRemaining = allowedNumGuesses - prevGuesses.length
  guessCount.innerHTML = `(${numGuessesRemaining} left)`
  // If player has more guesses, allow them to keep playing
  if (prevGuesses.length !== allowedNumGuesses) {
    resultText.innerHTML = text
  } else {
    // Otherwise, prompt player to start over
    resultText.innerHTML = "You ran out of guesses!"
    submitBtn.innerText = playAgainStr
  }
}

init()