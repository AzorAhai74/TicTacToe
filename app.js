
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


function gameReset(e) {
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i].getElementsByTagName('i')[0].classList.remove('Clicked');
        boardCells[i].getElementsByTagName('i')[1].classList.remove('Clicked');
    }
    humanTurn = [];
    computerTurn = [];
    totalTurns = 0;
    isThereAWinner = false;
    playerAboutToWin = false;
    hideResult();
}


function playGame() {
    if (totalTurns === 9 && !isThereAWinner) {
        displayResult('Tie Game :/');
        setTimeout(function() {
            gameReset();
        }, 1000);
    }

    else if (whoseTurn === 'Player' || totalTurns === 0) {
        cellClicked();
    } else if (whoseTurn === 'Computer') {
        setTimeout(function() {
            computer();
        }, 200);
    }
}

function cellClicked() {
        for (let i = 0; i < boardCells.length; i++) {
            boardCells[i].addEventListener('Click', function() {
            if (computerTurn.indexOf(Number(this.id)) !== -1 ||
                humanTurn.indexOf(Number(this.id)) !== -1
            ) {
            return;
            }
            this.getElementsByTagName('i')[0].classList.add('Clicked');
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
        random.getElementsByTagName('i')[1].classList.add('Clicked');
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
            humanTurn.indexOf(intelligentComputerNextMove) === -1 
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

function nextTurn(opponent, whoseMoves) {
    whoseTurn = opponent;
    totalMoves++;
    hasWon(whoseMoves, winCombo);
    playGame();
}

function hasWon(moves, winCombo) {
    let foundResults = winCombo.filter(
    array => 
        array.filter(item => {
            return moves.indexOf(item) > -1;
        }).length === 3
    );

    if (foundResults.length > 0) {
        if (whoseTurn === 'computer') {
            displayResult('You Won!');                
        } else if (whoseTurn === 'Player') {
            displayResult('The Computer has won');
        }
    }   didSomeoneWin = true;
}

function hideResult() {
    document.getElementById('overlay').style.display = 'none';
}