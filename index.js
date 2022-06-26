const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let computerScore = 0
let playerScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML= userChoice
    computerPlay()
    playRound()
}))

function computerPlay(){
    const number = Math.floor(Math.random()*3)
    if (number === 0){
        computerChoice = 'rock'
    }
    if (number === 1){ 
        computerChoice = 'paper'
    }
    if (number === 2){
        computerChoice = 'scissors'
    }
computerChoiceDisplay.innerHTML= computerChoice
}
function playRound(){
    if (computerChoice === userChoice) {
        result = 'its a draw. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        playerScore++;
        result = 'you win. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        computerScore++;
        result = 'you lose. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        playerScore++;
        result = 'you win. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        computerScore++;
        result = 'you lose. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        playerScore++;
        result = 'you win. Score ${playerScore} to ${computerScore}'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        computerScore++;
        result = 'you lose. Score ${playerScore} to ${computerScore}'
    }
    resultDisplay.innerHTML = result
}

