startgame = () => alert("Please press Ctrl + shift + J to open DevTools");

startgame();

let humanScore = 0;
let computerScore = 0;



    function getHumanChoice () {

    let humanChoice =  prompt("Enter your choice",);
    console.log(`You choose: ${humanChoice}`)

    humanChoice = humanChoice.toLowerCase();

    return humanChoice;

}

function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 10);

    if (computerChoice > 5) {
        computerChoice = "scissor"
    } else if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice <= 5){
        computerChoice = "paper";
    } 
    console.log(`Computer choose: ${computerChoice}`);
        return computerChoice;
} 



function playRound (firstChoice, secondChoice) {
    if (firstChoice === secondChoice) {
        console.log("draw");
    } else if (firstChoice === "rock" && secondChoice === "scissor") {
        console.log(`You win ${firstChoice} beats ${secondChoice}`);
        ++humanScore;
    } else if (firstChoice === "paper" && secondChoice === "rock") {
        console.log(`You win ${firstChoice} beats ${secondChoice}`);
        ++humanScore;
    } else if (firstChoice === "scissor" && secondChoice === "paper") {
        console.log(`You win ${firstChoice} beats ${secondChoice}`);
        ++humanScore;
    } else if (firstChoice === "rock" && secondChoice === "paper") {
        console.log(`Computer wins ${firstChoice} lose to ${secondChoice}`);
        ++computerScore;
    } else if (firstChoice === "paper" && secondChoice === "scissor") {
        console.log(`Computer wins ${firstChoice} lose to ${secondChoice}`);
        ++computerScore;
    } else if (firstChoice === "scissor" && secondChoice === "rock") {
        console.log(`Computer wins ${firstChoice} lose to ${secondChoice}`);
        ++computerScore;
    } 
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

for(let i = 0; i < 5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}

function playGame () {
    if (humanScore > computerScore) {
        console.log(`Player wins with ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins with ${computerScore} - ${humanScore}`);
    } else {
        console.log("No one wins, it's a tie!")
    }
}

playGame();
        

