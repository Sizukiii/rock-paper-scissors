const choice = ["r", "p", "S"]



function game(){
    //this is how the game is played

}

function play(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

}

function playerChoice () {
    //input from user
    let input = prompt('Type r for rock, P for paper  or S for scissors');
    while(input == null){
        input = prompt("Type r for rock, P for paper  or S for scissors;");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if(check == true){
        console.log(input);
   }
    console.log(input)
}

function computerChoice(){
    //get the input from the computer.
    return choice[Math.floor(math.random()*choice.length)]
}

function validateInput(choice){
    if(choice.includes(choice)){
        return true;
    }
        return false;
}


game();