const result = document.querySelector(".result")
const h2 = document.querySelector("h2")
const h1 = document.querySelector("h1")

function getComputerChoice(){
    let num = Math.random() * 3
    if(num < 1) return "rock"
    else if(num < 2) return "paper"
    else if(num <= 3) return "scissor"
    else return null
}

/*function getHumanChoice(){
    let humanChoice = prompt("Enter rock or paper or scissor").toLowerCase()
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor"){
        h2.textContent = "WRONG INPUT"
        throw new Error("Wrong Input")
    }
    h2.textContent = "Your choice is: " + humanChoice
    return humanChoice
}*/


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        if(humanChoice == "rock") result.textContent = "Both chose ROCK, it's a tie!"
        else if(humanChoice == "paper") result.textContent = "Both chose PAPER, it's a tie!"
        else result.textContent = "Both chose SCISSOR, it's a tie!"
    }
    else if(humanChoice === "rock"){
        if(computerChoice == "paper"){
            result.textContent = "PAPER beats ROCK, you lost!"
            computerScore++
        }else{
            result.textContent = "ROCK beats SCISSOR, you won!"
            humanScore++
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice == 'rock'){
            result.textContent = "PAPER beats ROCK, you won!"
            humanScore++
        }else{
            result.textContent = "SCISSOR beats PAPER, you lost!"
            computerScore++
        }
    }else{
        if(computerChoice == 'rock'){
            result.textContent = "ROCK beats SCISSOR, you lost!"
            computerScore++
        }else{
            result.textContent = "SCISSOR beats PAPER, you won!"
            humanScore++
        }
    }
}

let humanScore = 0
let computerScore = 0

let computerChoice, humanChoice

/*function playGame(){

   
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()

    playRound(humanChoice, computerChoice)

    console.log("Your Score : Computer Score")
    console.log(`${humanScore} - ${computerScore}`)
}*/


/*for(let i = 0; i < 5; i++){
    playGame()
}*/

const btn = document.querySelectorAll(".btn")

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        computerChoice = getComputerChoice()
        humanChoice = event.target.id

        playRound(humanChoice, computerChoice)
        h1.textContent = `${humanScore} - ${computerScore}`

        if(humanScore == 5){
            result.textContent = "You won the game!!"
            humanScore = 0
            computerScore = 0
        }
        else if(computerScore == 5){
            result.textContent = "You lost the game...."
            humanScore = 0
            computerScore = 0
        }
    })
})

