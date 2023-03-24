const choices = ['rock', 'paper', 'scissors']

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
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
  }
   
const buttonsContainer = document.querySelector('#buttons-container');
const resultDiv = document.querySelector('#result');

buttonsContainer.addEventListener('click', (event) => {
    resultDiv.textContent = playRound(event.target.id, getComputerChoice())
});
