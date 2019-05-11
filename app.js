
let humanTurn = [];

let computerTurn = [];

let totalTurns = 0;

let whichTurn = "";

let checkWin = false;





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
    if (totalTurns === 0 && !checkWin) {
        alert('Tie Game :/');
        setTimeout(function() {
            gameReset();
        }, 1000);
    }

    else if (whichTurn === 'Human'  || totalTurns === 0) {
        humanTurn();
    } else if (whichTurn === 'computer') {
        setTimeout(function() {
            computerTurn();
        }, 200);
    }
}

function human() {
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i]('click', cellClicked() {
            if (
                computerTurn.indexOf(Number(this.id)) !== -1 ||
                humanTurn.indexOf(Number(this.id)) !== -1 ||
            ) {
                return;
            }

            document.getElementsByClassName('gameBoard')[0].classList.add('clicked');
            humanTurn.push(Number(this.id));
            nextTurn('computer', humanTurn);

        });
    }
}

    