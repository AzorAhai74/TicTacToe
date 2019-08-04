let players = ['X', 'O'];
let currentTurn = 0;
let gameOver = false;
let draw = false;



let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
});

function startGame() {
    e.target.innerHTML = 'X';
    document.getElementById('message').innerHTML = 'X takes their Turn';
};


function cellClicked(e) {
    if (gameOver === true) {
        clearBoard();
        return;
    }

    if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
        return;
    }

    e.target.innerHTML = players[currentTurn];
    checkWinner();
    checkDraw();
    toggle();

    function clearBoard() {
        location.reload();
    }
};

function toggle() {
    if (currentTurn === 0) {
        currentTurn = 1;
    } else {
        currentTurn = 0;
    }
    document.getElementById('message').innerHTML = players[currentTurn] + " 's Turn";
}




function checkWinner(e) {
    if (document.getElementById('topLeft').innerHTML === 'X' && document.getElementById('topCenter').innerHTML === 'X' && document.getElementById('topRight').innerHTML === 'X' ||
        document.getElementById('middleLeft').innerHTML === 'X' && document.getElementById('middleCenter').innerHTML === 'X' && document.getElementById('middleRight').innerHTML === 'X' ||
        document.getElementById('bottomLeft').innerHTML === 'X' && document.getElementById('bottomCenter').innerHTML === 'X' && document.getElementById('bottomRight').innerHTML === 'X' ||
        document.getElementById('topLeft').innerHTML === 'X' && document.getElementById('middleLeft').innerHTML === 'X' && document.getElementById('bottomLeft').innerHTML === 'X' || 
        document.getElementById('topCenter').innerHTML === 'X' && document.getElementById('middleCenter').innerHTML === 'X' && document.getElementById('bottomCenter').innerHTML === 'X' ||
        document.getElementById('topRight').innerHTML === 'X' && document.getElementById('middleRight').innerHTML === 'X' && document.getElementById('bottomRight').innerHTML === 'X' ||
        document.getElementById('topLeft').innerHTML === 'X' && document.getElementById('middleCenter').innerHTML === 'X' && document.getElementById('bottomRight').innerHTML === 'X' ||
        document.getElementById('topRight').innerHTML === 'X' && document.getElementById('middleCenter').innerHTML === 'X' && document.getElementById('middleRight').innerHTML === 'X') 
        {
    
            gameOver = true;
            setTimeout(function() {
                alert('X Wins the Game!');
            }, 100);
            document.getElementById('message').innerHTML = 'Game Over';
    } else if
        (document.getElementById('topLeft').innerHTML === 'O' && document.getElementById('topCenter').innerHTML === 'O' && document.getElementById('topRight').innerHTML === 'O' ||
        document.getElementById('middleLeft').innerHTML === 'O' && document.getElementById('middleCenter').innerHTML === 'O' && document.getElementById('middleRight').innerHTML === 'O' ||
        document.getElementById('bottomLeft').innerHTML === 'O' && document.getElementById('bottomCenter').innerHTML === 'O' && document.getElementById('bottomRight').innerHTML === 'O' ||
        document.getElementById('topLeft').innerHTML === 'O' && document.getElementById('middleLeft').innerHTML === 'O' && document.getElementById('bottomLeft').innerHTML === 'O' || 
        document.getElementById('topCenter').innerHTML === 'O' && document.getElementById('middleCenter').innerHTML === 'O' && document.getElementById('bottomCenter').innerHTML === 'O' ||
        document.getElementById('topRight').innerHTML === 'O' && document.getElementById('middleRight').innerHTML === 'O' && document.getElementById('bottomRight').innerHTML === 'O' ||
        document.getElementById('topLeft').innerHTML === 'O' && document.getElementById('middleCenter').innerHTML === 'O' && document.getElementById('bottomRight').innerHTML === 'O' ||
        document.getElementById('topRight').innerHTML === 'O' && document.getElementById('middleCenter').innerHTML === 'O' && document.getElementById('middleRight').innerHTML === 'O')
        {

            gameOver = true;
            setTimeout(function() {
                alert('O Wins the Game!');
            }, 100);
            document.getElementById('message').innerHTML = 'Game Over';

    }
};

function checkDraw(e) {
    if (document.getElementById([1]) === 'X' || document.getElementById([1]) === 'O' &&
    document.getElementById([2]) === 'X' || document.getElementById([2]) === 'O' &&
    document.getElementById([3]) === 'X' || document.getElementById([3]) === 'O' &&
    document.getElementById([4]) === 'X' || document.getElementById([4]) === 'O' &&
    document.getElementById([5]) === 'X' || document.getElementById([5]) === 'O' &&
    document.getElementById([6]) === 'X' || document.getElementById([5]) === 'O' &&
    document.getElementById([7]) === 'X' || document.getElementById([7]) === 'O' &&
    document.getElementById([8]) === 'X' || document.getElementById([8]) === 'O' &&
    document.getElementById([9]) === 'X' || document.getElementById([9]) === 'O') { 
    {
    
            draw = true;
            setTimeout(function() {
                alert('Tie Game!');
            }, 100);
            document.getElementById('nessage').innerHTML = 'Game Over';
        }  
    }
};







