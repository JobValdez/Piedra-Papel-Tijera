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
    playerSelection.src = "img/"+userOption+".jpg";

    resultText.innerHTML = "Choosing!";

    const interval = setInterval(function(){
        const machineOption = calMachineOption();
        machineSelection.src = "img/"+machineOption+".jpg";
    }, 200);

    setTimeout(function(){

        clearInterval(interval);
        
        const machineOption = calMachineOption();
        const result = calcResult(userOption, machineOption);

        machineSelection.src = "img/"+machineOption+".jpg";

        switch(result){
            case TIED:
                resultText.innerHTML = "Tied"
                break;
            case WINNER:
                resultText.innerHTML = "You Won"
                break;
            case LOSSER:
                resultText.innerHTML = "You Lost"
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