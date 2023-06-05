const blessed = require('blessed');
const tetrisBoardCommands = require('./tetrisBoardCommands');
const rows = 20;
const cols = 10;
let done = 1;
let position = [1,5];
let currentBlock;
// Dimensions of the Tetris board
// Create a new blessed screen
const screen = blessed.screen({
  smartCSR: true
});

const board = blessed.box({
  top: 'center',
  left: 'center',
  width: cols * 2 + 2,
  height: rows + 2,
  tags: true,
  border: {
    type: 'line'
  }
});
const instructionBox = blessed.box({
  top: 'center',
  right: 1,
  width: '25%',
  height: '60%',
  content: 'Instructions\n\n up ^ - Rotate \n\n down v - fast drop \n\n left and right to move \n\n press q to quit',
  style: {
    fg: 'white',
    bg: 'black'
  }
});
screen.append(instructionBox);
// // Add the Tetris board element to the screen
screen.append(board);
let realBoard = tetrisBoardCommands.populateEmptyBoard();
board.setContent(tetrisBoardCommands.boardToString(realBoard));
let update;
let maxD;
screen.removeListener();


function gameLoop() {

  if(done == 1){
    done = 0
    currentBlock = tetrisBoardCommands.randomBlock();
    position = [1,5];
    form = 0;
  }
  maxD= tetrisBoardCommands.maxDistance(position,currentBlock,form,realBoard);
  update = tetrisBoardCommands.dropBlock(position,currentBlock,form,realBoard,maxD,done);
  if(update.done ===1){
    done = update.done;
  }
  if(update.done ===0){
    position = update.position;
    maxD = update.maxDistance;
  }
  realBoard = update.boardPieces;
  realBoard = tetrisBoardCommands.clearLines(realBoard);
  board.setContent(tetrisBoardCommands.boardToString(realBoard))
  screen.render();
  // Call the game loop function recursively after a delay (e.g., 500ms)
  setTimeout(gameLoop,300);
}


function handleUserInput(ch, key) { 
    if (key.name === 'up') {
      let up = tetrisBoardCommands.rotateBlock(position,currentBlock,form,realBoard)
      form = up.form;
      realBoard = up.boardPieces;
      board.setContent(tetrisBoardCommands.boardToString(realBoard));
      screen.render();
      maxD=tetrisBoardCommands.maxDistance(position,currentBlock,form,realBoard);

    } else if (key.name === 'down') {
      let down = tetrisBoardCommands.instantDrop(position,maxD,currentBlock,form,realBoard,done);
      done = 1;
      realBoard = down.boardPieces;
      board.setContent(tetrisBoardCommands.boardToString(realBoard));
      screen.render();

    } else if (key.name === 'left') {
     let maxLeft = tetrisBoardCommands.maxLeftDistance(position,currentBlock,form,realBoard);
     let lefts = tetrisBoardCommands.goLeft(position,currentBlock,form,realBoard,maxLeft,0)
     if (lefts.done==1){
      realBoard = lefts.boardPieces;
      position = lefts.position;
     }
     board.setContent(tetrisBoardCommands.boardToString(realBoard));
      screen.render();
    maxD = tetrisBoardCommands.maxDistance(position,currentBlock,form,realBoard);



      // Move the Tetris piece to the left
    } else if (key.name === 'right') {
      let maxRight = tetrisBoardCommands.maxRightDistance(position,currentBlock,form,realBoard);
     let rights = tetrisBoardCommands.goRight(position,currentBlock,form,realBoard,maxRight,0)
     if (rights.done==1){
      realBoard = rights.boardPieces;
      position = rights.position;
     }
     board.setContent(tetrisBoardCommands.boardToString(realBoard));
      screen.render();
    maxD = tetrisBoardCommands.maxDistance(position,currentBlock,form,realBoard);

    }

  }
screen.key(['up', 'down', 'left', 'right'], handleUserInput);
// // Exit the program when pressing Ctrl+C
screen.key(['C-c','q'], () => {
  screen.destroy(); // Clean up Blessed resources
  process.exit(0); // Exit the Node.js process
});
gameLoop();
module.exports = {
}