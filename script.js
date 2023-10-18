/* 
- remove logic that plays five rounds
- create a button for each selection
- add event listeners to each button that call the playRound function with playerSelection (keep console.logs)
- add a div for displaying results
- change all console.logs to DOM methods
- display the running score
- once one player gets 5 points, announce a game winner
*/

let playerWins = 0;
let computerWins = 0;

// buttons call playRound function when clicked
let rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', () => {
    playRound('rock');
});

let paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', () => {
    playRound('paper');
});

let scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

let score = document.getElementById('score');
let scoreText = document.createTextNode(`Player Score: ${playerWins} Computer Score: ${computerWins}`);
score.appendChild(scoreText);


// returns a random computer choice
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerChoice;

    if (number == 0) {
        computerChoice = 'rock';
    } else if (number == 1) {
        computerChoice = 'paper';
    } else if (number == 2) {
        computerChoice = 'scissors';
    }
    
    return computerChoice;
}

//plays a single round and keeps track of wins
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result;
    let roundResults = document.getElementById('roundResults');
    roundResults.textContent ="";
    
    if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result = 'computer';
        console.log(`You lose the round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`);
        let resultsText = document.createTextNode(`You lose the round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`);
        roundResults.appendChild(resultsText);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 'player';
        console.log(`You win the round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`);
        let resultsText = document.createTextNode(`You win the round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`);
        roundResults.appendChild(resultsText);
    } else if(playerSelection == computerSelection) {
        result = 'tie';
        console.log("The round is a tie!");
        let resultsText = document.createTextNode("The round is a tie!");
        roundResults.appendChild(resultsText);
    }

    if (result == 'player') {
        playerWins++;
    } else if (result =='computer') {
        computerWins++;
    }

    score.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;

    let finish = document.getElementById('finish');

    if (playerWins == 5) {
        displayWinner('player')
        
    } else if (computerWins == 5) {
        displayWinner('computer');
    }
}

//displays game winner and asks player to play again
function displayWinner(winner) {
    
    if (winner == 'player') {
        finish.textContent = "You won!";
        console.log("You won!");
    } else if (winner == 'computer') {
        finish.textContent = "You lost!";
        console.log("You lost!");
    }

    let resetButton = document.createElement('button');
    let resetText = document.createTextNode("Play again?");
    resetButton.style.width = "100px";
    resetButton.style.height = "50px";

    const refreshPage = () => {
        location.reload();
      }
      
    resetButton.addEventListener('click', refreshPage);

    resetButton.appendChild(resetText);
    finish.appendChild(resetButton);

    let buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.remove(); 

}
