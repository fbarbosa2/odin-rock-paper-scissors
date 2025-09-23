
let humanScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    
    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex]
}

function getHumanChoice() {
    const choice = parseInt(prompt("Choose an option:\n1-rock\n2-paper\n3-scissors\nOption: "))

    return options[choice - 1]
}

function playRound(humanChoice, computerChoice){
    

    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You played ${humanChoice} and the computer played ${computerChoice}, you lose :(`)
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You played ${humanChoice} and the computer played ${computerChoice}, you lose :(`)
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You played ${humanChoice} and the computer played ${computerChoice}, you lose :(`)
        computerScore++
    } else {
        console.log(`You played ${humanChoice} and the computer played ${computerChoice}, you win :)`)
        humanScore++
    }
    
}

function playGame() {
    for(let i = 0; i < 5 ; i++){
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(`Score\nHUMAN:${humanScore}\nCOMPUTER:${computerScore}`)
    }
    console.log(`FINAL RESULTS\nHUMAN:${humanScore}\nCOMPUTER:${computerScore}\nThanks for Playing!`)
}

playGame()
