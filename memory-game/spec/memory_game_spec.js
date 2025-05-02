const jasmine = require('jasmine')
const { setupJSDOM } = require('./dom_setup')
let dom = setupJSDOM()
const { 
    flipTile,
    shuffleTiles,
    updateScore
} = require('../src/memory_game')

describe("Memory game", function() {
    let elements, board, tilesContainer, completionMsg

    beforeEach(() => {

        dom = setupJSDOM()

        elements = {
            title: document.querySelector('.title'),
            tiles: document.querySelectorAll('.tile-container'),
            scoreText: document.querySelector('.score-board_text'),
            scoreText_score: document.querySelector('.score-board_score'),
            completeMsg: document.querySelector('.complete')
        }

        board = document.querySelector('.board');
        tilesContainer = document.querySelector('.tiles-container');
        completionMsg = document.getElementById('completion-message');

    })

    it('should display the title of the game', () => {
        expect(elements.title.textContent.trim()).toBe("Memory Game")
    })

    it('should display the initial score of the game', () => {
        expect(elements.scoreText.textContent.trim()).toBe("Score 0")
        expect(elements.scoreText_score.textContent.trim()).toBe("0")
    })

    it('should display the initial tiles', () => {
        expect(elements.tiles.length).toEqual(12)
    })

    it('should hide the complete message initially', () => {
        expect(elements.completeMsg.style.display).toBe('none')
        const computedStyle = dom.window.getComputedStyle(elements.completeMsg);
        expect(computedStyle.display).toBe('none');
    })

    it('should flip a tile when clicked', () => {
        const tile = elements.tiles[0]
        const tileImg = tile.querySelector('img')

        spyOn(dom.window, 'flipTile').and.callThrough()

        tile.click()

        expect(dom.window.flipTile).toHaveBeenCalled()
        expect(tileImg.classList.contains('show-img')).toBe(true)
    })

    it('should update the score when matching tiles are flipped', () => {

        const [firstTile, secondTile] = elements.tiles

        firstTile.click()

        const firstTileImageSrc = firstTile.querySelector('img').src

        secondTile.click()

        const secondTileImageSrc = secondTile.querySelector('img').src

        expect(firstTileImageSrc).toBe(secondTileImageSrc)

        expect(elements.scoreText_score.textContent.trim()).toBe('0') // Assuming a correct match adds 1 point
    })

    it("should shuffle tiles", () => {
        const tilesBeforeShuffle = Array.from(board.children).map(tile => tile.outerHTML);

        shuffleTiles(board); // Call the shuffle function

        const tilesAfterShuffle = Array.from(board.children).map(tile => tile.outerHTML);

        // Ensure the order is changed but the content is the same
        expect(tilesBeforeShuffle).not.toEqual(tilesAfterShuffle);
        expect(tilesBeforeShuffle.sort()).toEqual(tilesAfterShuffle.sort());
    })

    it("should flip a tile and reveal the image", () => {
        const tile = elements.tiles[0];
        const img = tile.querySelector('img');

        tile.addEventListener('click', flipTile);
        tile.click(); // Simulate a tile click

        expect(img.classList.contains('show-img')).toBe(true);
    })

    it("should match tiles correctly", () => {
        const [firstTileElement, secondTileElement] = elements.tiles;

        // Set first and second tiles to match
        firstTileElement.querySelector('img').src = '../public/images/ant.png';
        secondTileElement.querySelector('img').src = '../public/images/ant.png';

        firstTileElement.addEventListener('click', flipTile);
        secondTileElement.addEventListener('click', flipTile);

        firstTileElement.click();
        secondTileElement.click();

        expect(firstTileElement.querySelector('img').classList.contains('show-img')).toBe(true);
        expect(secondTileElement.querySelector('img').classList.contains('show-img')).toBe(true);
    });

    it("should reset the board after mismatching tiles", () => {
        const [firstTileElement, secondTileElement] = elements.tiles;

        // Set first and second tiles to mismatch
        firstTileElement.querySelector('img').src = 'ant.png';
        secondTileElement.querySelector('img').src = 'berry.png';

        firstTileElement.addEventListener('click', flipTile);
        secondTileElement.addEventListener('click', flipTile);

        firstTileElement.click();
        secondTileElement.click();

        jasmine.clock().tick(1000); // Fast-forward the clock

        expect(firstTileElement.querySelector('img').classList.contains('show-img')).toBe(false);
        expect(secondTileElement.querySelector('img').classList.contains('show-img')).toBe(false);
    });
    
    it("should display the completion message when all tiles are matched", () => {
        const scoreElement = elements.scoreText_score;

        // Simulate scoring until completion
        scoreElement.textContent = "5"; // 5 matches already
        updateScore(); // Final match

        const completeMessage = elements.completeMsg.textContent.trim();
        expect(completeMessage).toBe('Congratulations!!!  You have matched all image pairs'); // Completion message should be shown
    });

    fit("should reset the board after mismatching tiles", () => {
        const [firstTileElement, secondTileElement] = elements.tiles;

        // Set first and second tiles to mismatch
        firstTileElement.querySelector('img').src = 'ant.png';
        secondTileElement.querySelector('img').src = 'berry.png';

        firstTileElement.addEventListener('click', flipTile);
        secondTileElement.addEventListener('click', flipTile);

        firstTileElement.click();
        secondTileElement.click();

        jasmine.clock().install()
        jasmine.clock().tick(1000); // Fast-forward the clock

        expect(firstTileElement.querySelector('img').classList.contains('show-img')).toBe(false);
        expect(secondTileElement.querySelector('img').classList.contains('show-img')).toBe(false);
        jasmine.clock().uninstall()
    });
    
    it("should display the completion message when all tiles are matched", () => {
        const scoreElement = elements.scoreText_score;

        // Simulate scoring until completion
        scoreElement.textContent = "5"; // 5 matches already
        updateScore(); // Final match

        const completeMessage = elements.completeMsg.textContent.trim();
        expect(completeMessage).toBe('Congratulations!!!  You have matched all image pairs'); // Completion message should be shown
    });
})