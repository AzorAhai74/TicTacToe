
let human;

let humanTurn = [];

let computerTurn = [];

let totalTurns = 0;

let whoseTurn = '';

let isThereAWinner = false;

let playerAboutToWin = false;

let intelligentComputerNextMove;



let resetTheGame = document.querySelectorAll('.resetGame');

let boardCells = [
    document.getElementsByClassName('cellTl')[0],
    document.getElementsByClassName('cellTm')[0],
    document.getElementsByClassName('cellTr')[0],
    document.getElementsByClassName('cellMl')[0],
    document.getElementsByClassName('cellMm')[0],
    document.getElementsByClassName('cellMr')[0],
    document.getElementsByClassName('cellBl')[0],
    document.getElementsByClassName('cellBm')[0],
    document.getElementsByClassName('cellBr')[0],
];

let winCombo = [
    [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,4],
    [3,6,9], [1,5,9], [3,5,7]
]

resetTheGame.forEach(function(resetGame) {
    resetGame.addEventListener('click', gameReset);
});

function gameReset() {
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i].innerHTML = '';
    }
}

boardCells.forEach(function(gameboard) {
    gameboard.addEventListener('click', cellClicked);
})

function cellClicked(e) {
    if (human) {
        e.target.textContent = 'X';
    } else {
        'O';
    }
}

function playGame() {
    if (totalTurns === 9 && !isThereAWinner) {
        displayResult('Tie Game :/');
        setTimeout(function() {
            gameReset();
        }, 1000);
    }

    else if (whoseTurn === 'Player' || totalTurns === 0) {
        playerTurn();
    } else if (whoseTurn === 'Computer') {
        setTimeout(function() {
            computer();
        }, 200);
    }
}

function player() {
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i].addEventListener('Click', function() {
            if (
                computerTurn.indexOf(Number(this.id)) !== -1 ||
                playerTurn.indexOf(Number(this.id)) !== -1
            ) {
            return;
            }

            document.getElementsById([0])('Clicked');
            humanTurn.push(Number(this.id));
            nextTurn('Computer', humanTurn);
        });
    }
}

function computer() {
    intelligentComputer();
    let random = pickRandomCell();
    for (let i = 0; i < boardCellsLength; i++) {
        if (totalTurns === 9 && !isThereAWinner) {
            return;
        } else if (
            computerTurn.indexOf(Number(random.id)) !== -1 ||
            playerTurn.indexOf(Number(random.id)) !== -1
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
            playerTurn.indexOfintelligentComputerNextMove0 === -1 
        ) {
            random = intelligentComputerNextMove;
            playerAboutToWin = false;
        } else {
            random = Math.floor
        }
}