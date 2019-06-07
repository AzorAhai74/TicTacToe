
let humanTurn = [];

let computerTurn = [];

let totalTurns = 0;

let whoseTurn = '';

let isThereAWinner = false;

let playerAboutToWin = false;

let intelligentComputerNextMove;


let winCombo = [
    [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,4],
    [3,6,9], [1,5,9], [3,5,7]
]

let boardCells = document.querySelectorAll('.gameboard');
let resetTheGame = document.querySelectorAll('.resetGame');

window.onLoad = playGame();

resetTheGame.forEach(function(resetGame) {
    resetGame.addEventListener('click', gameReset);
});




function gameReset() {
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i].innerHTML = '';
    }
    humanTurn = [];
    computerTurn = [];
    totalTurns = 0;
    isThereAWinner = false;
    playerAboutToWin = false;
}


function playGame() {
    if (totalTurns === 9 && !isThereAWinner) {
        displayResult('Tie Game :/');
        setTimeout(function() {
            gameReset();
        }, 1000);
    }

    else if (whoseTurn === 'Player' || totalTurns === 0) {
        player();
    } else if (whoseTurn === 'Computer') {
        setTimeout(function() {
            computer();
        }, 200);
    }
}

function player() {
        for (let i = 0; i < boardCells.length; i++) {
            boardCells[i].addEventListener('Click', function() {
            if (computerTurn.indexOf(Number(this.id)) !== -1 ||
                humanTurn.indexOf(Number(this.id)) !== -1
            ) {
            return;
            }
            this.getElementById('')[0]('Clicked');
            humanTurn.push(Number(this.id));
            nextTurn('Computer', humanTurn);
        });
    }
}


function computer() {
    intelligentComputer();
    let random = pickRandomCell();
    for (let i = 0; i < boardCells.Length; i++) {
        if (totalTurns === 9 && !isThereAWinner) {
            return;
        } else if (
            computerTurn.indexOf(Number(random.id)) !== -1 ||
            humanTurn.indexOf(Number(random.id)) !== -1
        ) {
            return computer();
        }
        random.getElementsById([1])('Clicked');
    }

    if (!computerTurn.includes(Number(random.id))) {
        computerTurn.push(Number(random.id));
    }
    nextTurn('Player', computerTurn);
    
}

function pickRandomCell() {
    let random;
    if (playerAboutToWin) {
        if (
            computerTurn.indexOf(intelligentComputerNextMove) === -1 &&
            humanTurn.indexOfintelligentComputerNextMove0 === -1 
        ) {
            random = intelligentComputerNextMove;
            playerAboutToWin = false;
        } else {
            random = Math.floor(Math.random() * boardCells.length);
        }
        return boardCells[random];
    }
}

function intelligentComputer() {
    let playerPotentialWins = winCombo.filter(
    array =>
        array.filter(item => {
            return humanTurn.indexOf(item) > -1;
        }).length === 2
    );

    if (playerPotentialWins.length > 0) {
        playerAboutToWin = true;
        playerPotentialWins.filter(array =>
            array.filter(item => {
                if (
                    playerPotentialWins.indexOf(item) === -1 &&
                    humanTurn.indexOf(item) === -1 &&
                    computerTurn.indexOf(item) === -1
                ) {
                    intelligentComputerNextMove = item;
                }
            })
        );
    }
}   

