function getComputerChoice(){
    let num = Math.random() * 3
    if(num < 1) return "rock"
    else if(num < 2) return "paper"
    else if(num <= 3) return "scissors"
    else return null
}

let choice = prompt("Enter either rock or paper or scissors: ").toLowerCase()

if (choice != "rock" && choice != "paper" && choice != "scissors"){
    console.log("Wrong Input")
    throw new Error("stop")
}

console.log(`Your Choice: ${choice}`)

let computer = getComputerChoice()

console.log(`Computer Choice: ${computer}`)

if (choice === computer){
    console.log("Tie!")
}
else if ((choice == "rock" && computer == "scissors") || (choice == "scissors" && computer == "paper") || (choice == "paper" && computer == "rock")){
    console.log("You won!")
}
else{
    console.log("You lost!")
}
