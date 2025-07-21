const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const showUserChoice = document.querySelector(".showUserChoice");
const showComputerChoice = document.querySelector(".showComputerChoice");
const roundResult = document.querySelector(".roundResult");
const currentScore = document.querySelector(".currentScore");
const showWinner = document.querySelector(".showWinner");

let humanScore = 0;
let computerScore = 0;
let lifeTurn = 5;
let humanLife = lifeTurn;
let computerLife = lifeTurn;

getHumanChoice();
function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 10);

    if (computerChoice > 5) {
        computerChoice = "scissor"
    } else if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice <= 5){
        computerChoice = "paper";
    } 
    return computerChoice;
};

function getHumanChoice () {
    
    rock.onclick = () => {
        const computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
        showUserChoice.textContent = "You Choose: rock";
        showComputerChoice.textContent = `Computer choose: ${getComputerChoice()}`;
    };

    paper.onclick = () => {
        const computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
        showUserChoice.textContent = "You Choose: paper";
        showComputerChoice.textContent = `Computer choose: ${getComputerChoice()}`;
    };

    scissor.onclick = () => {
        const computerChoice = getComputerChoice();
        playRound("scissor", computerChoice);
        showUserChoice.textContent = "You Choose: scissor";
        showComputerChoice.textContent = `Computer choose: ${getComputerChoice()}`;
    };
};


function playRound (firstChoice, secondChoice) {

    if (firstChoice === secondChoice) {
        roundResult.textContent = "draw";
    } else if (firstChoice === "rock" && secondChoice === "scissor") {
        roundResult.textContent = `You win ${firstChoice} beats ${secondChoice}`;
        ++humanScore;
        computerLife--;
    } else if (firstChoice === "paper" && secondChoice === "rock") {
        roundResult.textContent = `You win ${firstChoice} beats ${secondChoice}`;
        ++humanScore;
        computerLife--;
    } else if (firstChoice === "scissor" && secondChoice === "paper") {
        roundResult.textContent = `You win ${firstChoice} beats ${secondChoice}`;
        ++humanScore;
        computerLife--;
    } else if (firstChoice === "rock" && secondChoice === "paper") {
        roundResult.textContent = `Computer wins ${firstChoice} lose to ${secondChoice}`;
        ++computerScore;
        humanLife--;
    } else if (firstChoice === "paper" && secondChoice === "scissor") {
        roundResult.textContent = `Computer wins ${firstChoice} lose to ${secondChoice}`;
        ++computerScore;
        humanLife--;
    } else if (firstChoice === "scissor" && secondChoice === "rock") {
        roundResult.textContent = `Computer wins ${firstChoice} lose to ${secondChoice}`;
        ++computerScore;
        humanLife--;
    };
    currentScore.textContent = `The Score is Human: ${humanScore} Computer: ${computerScore}`;

    if (humanLife <= 0 || computerLife <= 0 ) {
        playGame();

    };
};

function playGame () {
    if (humanScore > computerScore) {
        showWinner.textContent = `Player wins with ${humanScore} - ${computerScore}`;
    } else if (humanScore < computerScore) {
        showWinner.textContent = `Computer wins with ${computerScore} - ${humanScore}`;
    } else {
        showWinner.textContent = "No one wins, it's a tie!";
    };
    
     humanScore = 0;
     computerScore = 0;
     lifeTurn = 5;
     humanLife = lifeTurn;
     computerLife = lifeTurn;

    currentScore.textContent = "";
    roundResult.textContent = "";
    showUserChoice.textContent = "";
    showComputerChoice.textContent = "";
};

