let players = ['X', 'O'];
let currentTurn = 0;
let gameOver = false;
let draw = false;
let blankCell = false;




let cells = document.querySelectorAll('.cell');

let gameboardCells = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];



let topLeft = document.getElementById([1]);
let topCenter = document.getElementById([2]);
let topRight = document.getElementById([3]);
let middleLeft = document.getElementById([4]);
let middleCenter = document.getElementById([5]);
let middleRight = document.getElementById([6]);
let bottomLeft = document.getElementById([7]);
let bottomCenter = document.getElementById([8]);
let bottomRight = document.getElementById([9]);

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
});

function validateCell() {
	if (gameboardCells == '') {
		blankCell = true;
	} else {
		blankCell = false;
		return false;
	}
};

function startGame() {
    alert('You are X');
};


function cellClicked(e) {
    if (gameOver === true) {
        clearBoard();
        return;
    }

    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return;
    }

    e.target.textContent = players[currentTurn];
	startGame();
    toggle();
    
};

function toggle() {
    if (currentTurn === 0) {
        currentTurn = 1;
    } else {
        currentTurn = 0;
    }
}

function computerTurn() {
	var blanks = [];
	var place = gameboardCells[i].innerText;	
	if (place == '') {
		blanks.push([i]);
	}
	for (var i = 1; i <= 9; i++) {
		if (blanks.length > 0) {
		var randomNumber = Math.floor((Math.random() * 9) + 1);
		var randomSquare = ('cell' + randomNumber);
		validateCell(randomSquare);
		toggle();
		}

	}
};












