let cells = document.querySelectorAll('Cell');

cells.forEach(function(cell) {
    cell.addEventListener("Click", cellClicked);
});

function cellClicked(e) {

    e.target.textcontent = 'Hello';
}

