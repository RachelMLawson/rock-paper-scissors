let playerWins = 0;
let computerWins = 0;

// buttons created with html and accessed through DOM
// call playRound function when clicked
let rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', () => {
    playRound('rock');
});

let paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', () => {
    playRound('paper');
});

let scissorsBtn = document.getElementById("scissorsBtn");
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

//plays a single round and returns a string declaring the winner
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
        //let roundResults = document.getElementById('roundResults');
        roundResults.appendChild(resultsText);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 'player';
        console.log(`You win the round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`);
        let resultsText = document.createTextNode(`You win the round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`);
        //let roundResults = document.getElementById('roundResults');
        roundResults.appendChild(resultsText);
    } else if(playerSelection == computerSelection) {
        result = 'tie';
        console.log("The round is a tie!");
        let resultsText = document.createTextNode("The round is a tie!");
        //let roundResults = document.getElementById('roundResults');
        roundResults.appendChild(resultsText);
    }

    

    if (result == 'player') {
        playerWins++;
    } else if (result =='computer') {
        computerWins++;
    }

    score.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;

    let end = document.getElementById('end');

    if (playerWins == 5) {
        displayWinner('player')
        
    } else if (computerWins == 5) {
        displayWinner('computer');
    }

    return result;
}

function displayWinner(winner) {
    //need to remove button functionality, change appearance
    if (winner == 'player') {
        end.textContent = "You won!";
    } else if (winner == 'computer') {
        end.textContent = "You lost!";
    }
    let resetButton = document.createElement('button');
    let resetText = document.createTextNode("Play again?");
    resetButton.appendChild(resetText);
    resetButton.addEventListener('click', () => {
            resetGame();
        });
    end.appendChild(resetButton);

}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    score.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;
    roundResults.textContent = "";
    end.removeChild(resetButton);
    end.textContent = " ";

    // need to remove winner text and play again button
    

}




/*contains round function and plays 5 rounds, keeps score, and reports winner or loser
needs to: 
1. Play 5 rounds
2. Each round gets player choice, then calls playRound function and returns winner or loser result. playRound should also still display result to user.
3. If winner result, win count goes up one. If loser result, lose count goes up one. If tie, no change
4. After 5 rounds, if win count is more than lose count, display winner message. If lose count is more than lose count, display loser message

          
function game() {
    let winCount = 0;
    let loseCount = 0;

    //for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make a selection");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == 'winner') {
            winCount++;
        } else if (result =='loser') {
            loseCount++;
        }
    //}

    if (winCount > loseCount) {
        console.log("You won the game!");
    } else if (winCount < loseCount) {
        console.log("You lost the game!");
    }
}*/





/* 
- remove logic that plays five rounds
- create a button for each selection
- add event listeners to each button that call the playRound function with playerSelection (keep console.logs)
- add a div for displaying results
- change all console.logs to DOM methods
- display the running score
- once one player gets 5 points, announce a game winner
*/
