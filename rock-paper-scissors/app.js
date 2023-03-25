const choices = ['rock', 'paper', 'scissors']
const buttonsContainer = document.querySelector('#buttons-container');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;


let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];


let capitalize = (string) => `${string.charAt(0).toUpperCase()}${string.slice(1)}`; 


function playerWins(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'scissors');
        case 'paper':
            return (computerSelection === 'rock');
        case 'scissors':
            return (computerSelection === 'paper');
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (!((choices.includes(playerSelection)) && (choices.includes(computerSelection)))) {
        return `Incorrect selection. Please enter one of the following choices: ${choices}`
    }

    if (playerSelection == computerSelection) {
        return `It's a draw! You both have ${capitalize(playerSelection)}`
    }

    if (playerWins(playerSelection, computerSelection)) {
        playerScore++;
        if ((playerScore === 5) & (computerScore < 5)){
            scoreDiv.textContent = `You won the game! Final score: Player ${playerScore} - Computer ${computerScore}`;
        } else if ((computerScore < 5) & (playerScore < 5)) {
            scoreDiv.textContent = `Player ${playerScore} - Computer ${computerScore}`;
        }
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        computerScore++;
        if ((computerScore === 5) & (playerScore < 5)) {
            scoreDiv.textContent = `You lost the game! Final score: Player ${playerScore} - Computer ${computerScore}`;
        } else if ((playerScore < 5) & (computerScore < 5)) {
            scoreDiv.textContent = `Player ${playerScore} - Computer ${computerScore}`;
        }
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
  }
   

buttonsContainer.addEventListener('click', (event) => {
    resultDiv.textContent = playRound(event.target.id, getComputerChoice())
});
