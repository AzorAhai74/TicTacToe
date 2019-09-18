let currentTurn = 0;


let gameOver = false;

let places = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];


let cells = document.querySelectorAll('.cell');


cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
})




function cellClicked(e) {
    if (gameOver == true) {
        clearBoard();
        gameOver = false;
        return;
    }
	if (e.target.textContent === 'X' || e.target.textContent === 'O') {
		return;
	}
	
	
}

	
		



function computerTurn() {
	let cpuMove = Math.floor(Math.random() * places.length);
    let cpuPlayedTileId = places[cpuMove];
    let pos = document.getElementById(cpuPlayedTileId);
	places.splice(places.indexOf(cpuPlayedTileId), 1);
	pos.textContent = 'O';
	switchTurn();
}







function switchTurn() {
    if (currentTurn === 0) {
        currentTurn = 1;
    } else {
    currentTurn = 0;
    }
}

function clearBoard() {
    location.reload();
}





  




















