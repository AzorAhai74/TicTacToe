let currentTurn = 0;

let players = ['X', 'O'];

let gameOver = false;




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
	e.target.textContent = players[currentTurn];
	switchTurn();
}

function checkWinner(e) {
	if (document.querySelector('c1').textContent === 'X' && document.querySelector('c2').textContent === 'X' && document.querySelector('c3') === 'X' ||
		document.querySelector('c4').textContent === 'X' && document.querySelector('c5').textContent === 'X' && document.querySelector('c6') === 'X' ||
		document.querySelector('c7').textContent === 'X' && document.querySelector('c8').textContent === 'X' && document.querySelector('c9') === 'X' ||
		document.querySelector('c1').textContent === 'X' && document.querySelector('c3').textContent === 'X' && document.querySelector('c7') === 'X' ||
		document.querySelector('c2').textContent === 'X' && document.querySelector('c5').textContent === 'X' && document.querySelector('c8') === 'X' ||
		document.querySelector('c3').textContent === 'X' && document.querySelector('c6').textContent === 'X' && document.querySelector('c9') === 'X' ||
		document.querySelector('c1').textContent === 'X' && document.querySelector('c5').textContent === 'X' && document.querySelector('c9') === 'X' ||
		document.querySelector('c3').textContent === 'X' && document.querySelector('c5').textContent === 'X' && document.querySelector('c7') === 'X' ) {
		{
			gameOver = true;
			setTimeout(function() {
				alert('X Wins!');
			}, 100);
			document.getElementById('message').textContent = 'Game Over';
		}
	} else if 
		(document.querySelector('c1').textContent === 'O' && document.querySelector('c2').textContent === 'O' && document.querySelector('c3') === 'O' ||
		document.querySelector('c4').textContent === 'O' && document.querySelector('c5').textContent === 'O' && document.querySelector('c6') === 'O' ||
		document.querySelector('c7').textContent === 'O' && document.querySelector('c8').textContent === 'O' && document.querySelector('c9') === 'O' ||
		document.querySelector('c1').textContent === 'O' && document.querySelector('c3').textContent === 'O' && document.querySelector('c7') === 'O' ||
		document.querySelector('c2').textContent === 'O' && document.querySelector('c5').textContent === 'O' && document.querySelector('c8') === 'O' ||
		document.querySelector('c3').textContent === 'O' && document.querySelector('c6').textContent === 'O' && document.querySelector('c9') === 'O' ||
		document.querySelector('c1').textContent === 'O' && document.querySelector('c5').textContent === 'O' && document.querySelector('c9') === 'O' ||
		document.querySelector('c3').textContent === 'O' && document.querySelector('c5').textContent === 'O' && document.querySelector('c7') === 'O')
		{
			gameOver = true;
			setTimeout(function() {
				alert('O Wins!');
			}, 100);
			document.getElementById('message').textContent = 'Game Over';
		}
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





  




















