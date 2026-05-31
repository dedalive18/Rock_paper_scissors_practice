function getComputerChoice(){
    let num = Math.random() * 3
    if(num < 1) return "rock"
    else if(num < 2) return "paper"
    else if(num <= 3) return "scissor"
    else return null
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock or paper or scissor").toLowerCase()
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor"){
        throw new Error("Wrong Input")
    }
    return humanChoice
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        if(humanChoice == "rock") console.log("Both chose ROCK, it's a tie!")
        else if(humanChoice == "paper") console.log("Both chose PAPER, it's a tie!")
        else console.log("Both chose SCISSOR, it's a tie!")
    }
    else if(humanChoice === "rock"){
        if(computerChoice == "paper"){
            console.log("PAPER beats ROCK, you lost!")
            computerScore++
        }else{
            console.log("ROCK beats SCISSOR, you won!")
            humanScore++
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice == 'rock'){
            console.log("PAPER beats ROCK, you won!")
            humanScore++
        }else{
            console.log("SCISSOR beats PAPER, you lost!")
            computerScore++
        }
    }else{
        if(computerChoice == 'rock'){
            console.log("ROCK beats SCISSOR, you lost!")
            computerScore++
        }else{
            console.log("SCISSOR beats PAPER, you won!")
            humanScore++
        }
    }
}

let humanScore = 0
let computerScore = 0

let computerChoice, humanChoice

function playGame(){

   
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()

    playRound(humanChoice, computerChoice)

    console.log("Your Score : Computer Score")
    console.log(`${humanScore} - ${computerScore}`)
}


for(let i = 0; i < 5; i++){
    playGame()
}