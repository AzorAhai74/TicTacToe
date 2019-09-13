let players = ['X', 'O'];
let currentTurn;

let cpu = 'O';


let cells = document.querySelectorAll('.cell');



cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked) 
});





function cellClicked(e) {
	cells.forEach(function(cell){
	if (cell.textContent == '') {
	e.target.textContent = 'X';	
	switchPlayer();
	} 
	});
	var blankCells = [];
	var random;
	for (var i = 1; i < 9; i++) {
		if (cells[i].textContent = '') {
			blankCells.push(cells[i]);
		}
	}
	if (cells.textContent == '') {
		blankCells.push(cells);
	};
	cells.forEach(function(cell) {
		if (cell.textContent == '') {
			blankCells.push(cell);	
			random = Math.ceil(Math.random() * blankCells.length) - 1;
			blankCells[random].textContent = 'O';
			switchPlayer();
		}
	});	
	
};

function switchPlayer() {
	if (currentTurn == 'X') {
		currentTurn = 'O';
	} else {
		currentTurn = 'X';
	}
}



function clearBoard() {
	location.reload();
}

function checkRow() {
	winner(document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3'));
	winner(document.getElementById('c4'), document.getElementById('c5'), document.getElementById('c6'));
	winner(document.getElementById('c7'), document.getElementById('c8'), document.getElementById('c9'));
	winner(document.getElementById('c1'), document.getElementById('c4'), document.getElementById('c7'));
	winner(document.getElementById('c2'), document.getElementById('c5'), document.getElementById('c8'));
	winner(document.getElementById('c3'), document.getElementById('c6'), document.getElementById('c9'));
	winner(document.getElementById('c1'), document.getElementById('c5'), document.getElementById('c9'));
	winner(document.getElementById('c3'), document.getElementById('c5'), document.getElementById('c7'));
};





  




















