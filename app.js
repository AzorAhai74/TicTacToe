let cells = document.querySelectorAll('.Cell');

cells.forEach(function(cell) {
    cell.addEventListener("Click", cellClicked);
});

let wins = {
    
    top:        [1, 2, 3],
    mid:        [4, 5, 6],
    bot:        [7, 8, 9],

    left:       [1, 4, 7],
    center:     [2, 5, 8],
    right :     [3, 6, 9],

    leftDiag:   [1, 5, 9],
    rightDiag:  [7, 5, 3]
}

 let players = [player1, player2];


function selectPlayer(player1, player2) {
    if (player1)
}
