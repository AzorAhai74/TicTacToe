let currentTurn = 0;

let players = ['X', 'O'];

let gameOver = false;

let cells = document.querySelectorAll('.cell');

let places = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];

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
	checkWinner();
	checkDraw()
	switchTurn();
}

function checkWinner() {
	if (document.getElementById('c1').textContent === 'X' && document.getElementById('c2').textContent === 'X' && document.getElementById('c3').textContent === 'X' ||
		document.getElementById('c4').textContent === 'X' && document.getElementById('c5').textContent === 'X' && document.getElementById('c6').textContent === 'X' ||
		document.getElementById('c7').textContent === 'X' && document.getElementById('c8').textContent === 'X' && document.getElementById('c9').textContent === 'X' ||
		document.getElementById('c1').textContent === 'X' && document.getElementById('c3').textContent === 'X' && document.getElementById('c7').textContent === 'X' ||
		document.getElementById('c2').textContent === 'X' && document.getElementById('c5').textContent === 'X' && document.getElementById('c8').textContent === 'X' ||
		document.getElementById('c3').textContent === 'X' && document.getElementById('c6').textContent === 'X' && document.getElementById('c9').textContent === 'X' ||
		document.getElementById('c1').textContent === 'X' && document.getElementById('c5').textContent === 'X' && document.getElementById('c9').textContent === 'X' ||
		document.getElementById('c3').textContent === 'X' && document.getElementById('c5').textContent === 'X' && document.getElementById('c7').textContent === 'X' ) {
		{
			gameOver = true;
			setTimeout(function() {
				alert('X Wins!');
			}, 100);
			document.getElementById('message').textContent = 'Game Over';
		}
	} else if 
		(document.getElementById('c1').textContent === 'O' && document.getElementById('c2').textContent === 'O' && document.getElementById('c3').textContent === 'O' ||
		document.getElementById('c4').textContent === 'O' && document.getElementById('c5').textContent === 'O' && document.getElementById('c6').textContent === 'O' ||
		document.getElementById('c7').textContent === 'O' && document.getElementById('c8').textContent === 'O' && document.getElementById('c9').textContent === 'O' ||
		document.getElementById('c1').textContent === 'O' && document.getElementById('c3').textContent === 'O' && document.getElementById('c7').textContent === 'O' ||
		document.getElementById('c2').textContent === 'O' && document.getElementById('c5').textContent === 'O' && document.getElementById('c8').textContent === 'O' ||
		document.getElementById('c3').textContent === 'O' && document.getElementById('c6').textContent === 'O' && document.getElementById('c9').textContent === 'O' ||
		document.getElementById('c1').textContent === 'O' && document.getElementById('c5').textContent === 'O' && document.getElementById('c9').textContent === 'O' ||
		document.getElementById('c3').textContent === 'O' && document.getElementById('c5').textContent === 'O' && document.getElementById('c7').textContent === 'O') {
		{
			gameOver = true;
			setTimeout(function() {
				alert('O Wins!');
			}, 100);
			document.getElementById('message').textContent = 'Game Over';
		}
	}
}

function checkDraw() {
	if (places.textContent !== '' &&  {
		gameOver = true;
		setTimeout(function() {
			alert('Tie Game!')
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
	


 
		








		

		 
		
				

	






  




















