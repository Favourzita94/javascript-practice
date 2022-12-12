
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() *13) + 1  
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function renderGame() {
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😊"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message }
}

function newCard() {
  let card3 = 8
  sum+= card3
    renderGame()
}

var prevButton;
var btn = document.getElementsByClassName("buttons")

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", myFunction)
}

function myFunction() {
    if (prevButton) 
        prevButton.classList.remove("clicked")
        prevButton = this;
        this.classList.add("clicked")
}