const ROCK = "rock";
const PAPEL = "papel";
const SCISSOR = "scissors";

const TIED = 0;
const WINNER = 1;
const LOSSER = 2;

const rockBtn =document.getElementById("rock");
const papelBtn =document.getElementById("papel");
const scissorBtn =document.getElementById("scissors");
const resultText = document.getElementById("result-text");
const playerSelection = document.getElementById("player-selection");
const machineSelection = document.getElementById("machine-selection");
const winners = document.getElementById("winners");
const tieds = document.getElementById("tieds");
const losses = document.getElementById("losses");


rockBtn.addEventListener ("click", ()=> {
    play(ROCK);

});

papelBtn.addEventListener ("click", ()=> {
    play(PAPEL);
});

scissorBtn.addEventListener ("click", ()=> {
    play(SCISSOR);
});

function play (userOption){
    playerSelection.src = "img/"+userOption+".png";

    resultText.innerHTML = "Choosing!";

    const interval = setInterval(function(){
        const machineOption = calMachineOption();
        machineSelection.src = "img/"+machineOption+".png";
    }, 200);

    setTimeout(function(){

        clearInterval(interval);
        
        const machineOption = calMachineOption();
        const result = calcResult(userOption, machineOption);

        machineSelection.src = "img/"+machineOption+".png";

        switch(result){
            case TIED:
                resultText.innerHTML = "Tied"
                tieds.value = ++tieds.value;

                if(tieds.value == 5) {
                    resultText.innerHTML = "I am sorry, you and the computer are too good that the game have finished as Draw";
                    winners.value = 0;
                    losses.value = 0;
                    tieds.value = 0;
                    console.log(tieds.value);
                }
                break;

            case WINNER:
                resultText.innerHTML = "You Won"
                winners.value = ++winners.value;

                if(winners.value == 5) {
                    resultText.innerHTML = "Congratulation you have beated the computer 5 times - The game is over";
                    let win = document.getElementsByClassName('gameOverMessage');
                    win.style.display= 'block';
                    winners.value = 0;
                    losses.value = 0;
                    tieds.value = 0;
                    console.log(winners.value);
                }
                break;

            case LOSSER:
                resultText.innerHTML = "You Lost"
                losses.value = ++losses.value;

                if(losses.value == 3) {
                    resultText.innerHTML = "I am sorry you have lost 3 times - Game over";
                    losses.value = 0;
                    winners.value = 0;
                    tieds.value = 0;
                    console.log(losses.value);
                }

                break;
        }
    }, 2000);

}

function calMachineOption (){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return ROCK;
        case 1:
            return PAPEL;
        case 2:
            return SCISSOR;    
    }
}

function calcResult(userOption, machineOption){
    
    if(userOption === machineOption){
        return TIED;

    }else if(userOption === ROCK){
        if(machineOption === PAPEL) return LOSSER;
        if(machineOption === SCISSOR) return WINNER;

    }else if(userOption === PAPEL){
        if(machineOption === SCISSOR) return LOSSER;
        if(machineOption === ROCK) return WINNER;

    }else if(userOption === SCISSOR){
        if(machineOption === ROCK) return LOSSER;
        if(machineOption === PAPEL) return WINNER;
    }
}