const choices = document.querySelectorAll(".btn")
const userDisplay = document.querySelector(".userDisplay")
const computerDisplay = document.querySelector(".computerDisplay")
const resultDisplay = document.querySelector(".resultDisplay")
let userChoice
let computerChoice

choices.forEach((choices) =>{
choices.addEventListener("click", (e) =>{
    const event = e.currentTarget.classList
    // console.log(event);
    if(event.contains('rock')){
        userChoice = "Rock"
    } else if(event.contains('paper')){
        userChoice = "Paper"
    } else {
        userChoice = "Scissors"
    }
userDisplay.textContent = `user: ${userChoice}`
generateComputer()
results()
})
})

function generateComputer(){
const random = Math.floor(Math.random() * choices.length)
if(random === 1){
    computerChoice = "Rock"
} else if( random === 2){
    computerChoice = "Paper"
} else{
    computerChoice = "Scissors"
}
computerDisplay.textContent = `computer: ${computerChoice}`
}

function results(){
switch(userChoice + computerChoice){
    case "ScissorsPaper":
    case "RockScissors":
    case "PaperRock":
    resultDisplay.textContent = "result: YOU WIN!"
    break
    case "PaperScissors":
    case "ScissorsRock":
    case "RockPaper":
    resultDisplay.textContent = "result: YOU LOSE!"
    break
    case "ScissorsScissors":
    case "RockRock":
    case "PaperPaper":
    resultDisplay.textContent = "result: DRAW!"
    break
}
}
