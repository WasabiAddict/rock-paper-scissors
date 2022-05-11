const getUserChoice = (userInput) => {
    userInput.toLowerCase();

    if(userInput === 'rock' || userInput=== 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }else {
       return 'error. please type in rock paper or scissors'
    }
};

// console.log(getUserChoice('rock'));
// console.log(getUserChoice('scissors'));
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('knife'));

var getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() *3)

   switch (randomNumber) {
       case 0:
            return 'rock';
       case 1:
            return 'scissors';
       case 2:
            return 'paper';
   }
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'this is a draw'
    }
    if(userChoice === 'rock' ){
        if(computerChoice === 'paper'){
             return 'Computer wins. You lose'
        } else {
             return 'you win'
        }
    }
    if(userChoice ==='scissor'){
        if(computerChoice === 'paper') {
            return'you win!'        
        } else {
            return'you lose!'
        }
    }
    if(userChoice === 'paper') {
        if (computerChoice ==='rock') {
             return'you win!'       
         } else {
            return'you lose!'
        }
    }
    if(userChoice === 'bomb') {
        return 'you bombed them! you win!'
    }
};

// console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();

    // console.log(userChoice);
    // console.log(computerChoice);
    console.log(determineWinner (userChoice, computerChoice)); 
};

playGame();