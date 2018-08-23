// choice user to test different "userChoice" in playGame()
let choice = 'paper';

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'||userInput ===
       'scissors'||userInput === 'paper'){
    return userInput
  }
  else{
    console.log('invalid input')
  }
}

const getComputerChoice = () => {
  var ran = Math.floor(Math.random() * 3)
  switch(ran){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';  
  }
}
function determineWinner (userChoice,computerChoice) {
  if (userChoice === 'bomb'){
    return 'user won'
  }
  if (userChoice === computerChoice){
    return 'the game was a tie';
  }
  if(userChoice === 'rock'){
     if(computerChoice === 'scissors'){
       return 'user won';
     }
    else{
      return 'computer won';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
       return 'user won';
       }
    else{
      return 'computer won';
    }
  }
  else if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'user won'
    }
    else{
      return 'computer won'
    }     
  }
}

function playGame(){
  var userChoice = getUserChoice(choice);
  var computerChoice = getComputerChoice();
  console.log('user choice: '+userChoice);
  console.log('computer choice: '+computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}

console.log(playGame())
