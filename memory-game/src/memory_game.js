let firstTile = null;
let secondTile = null;
let lockBoard = false;
let score = 0;
let tiles = [];

function shuffleTiles() {
    const tileArray = Array.from(document.querySelectorAll('.tile-container'));
    for (let i = tileArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileArray[i], tileArray[j]] = [tileArray[j], tileArray[i]];
    }

    const container = document.querySelector('.tiles-container');
    tileArray.forEach(tile => container.appendChild(tile));
}

function flipTile() {
    const img = this.querySelector('img')
    if (lockBoard || img === firstTile) return;

    img.classList.add('show-img');

    if (!firstTile) {
        firstTile = img;
    } else {
        secondTile = img;
        checkForMatch();
    }
}

if (typeof window !== 'undefined') {
    window.document.flipTile = flipTile
}

function checkForMatch() {
    const isMatch = firstTile.src === secondTile.src;
    isMatch ? disableTiles() : unFlipTiles();
}

function disableTiles() {
    firstTile.removeEventListener('click', flipTile);
    secondTile.removeEventListener('click', flipTile);
    resetBoard();
    updateScore();
}

function unFlipTiles() {
    lockBoard = true;
    setTimeout(() => {
        firstTile.classList.remove('show-img');
        secondTile.classList.remove('show-img');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstTile, secondTile, lockBoard] = [null, null, false];
}

function updateScore() {
    score++;
    document.querySelector('.score-board_score').textContent = score;
    if(score === 6) {
        lockBoard = true
        document.querySelector('.complete').style.display = 'block'
    }
}

document.addEventListener("DOMContentLoaded", () => {
    tiles = document.querySelectorAll('.tile-container')
    const board = document.querySelector('.board')

    shuffleTiles(board)

    tiles.forEach(tile => {
        tile.addEventListener('click', flipTile)
    });

});

module.exports = {
    updateScore,
    flipTile,
    shuffleTiles,
    flipTile,
};
