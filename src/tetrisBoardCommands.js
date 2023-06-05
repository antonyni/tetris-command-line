
const emptySpot = ' .';
const blueBlock = '{blue-fg}██{/blue-fg}';
const greenBlock = '{green-fg}██{/green-fg}';
const redBlock = '{red-fg}██{/red-fg}';
const yellowBlock = '{yellow-fg}██{/yellow-fg}';
const purpleBlock = '{magenta-fg}██{/magenta-fg}';
const whiteBlock = '{white-fg}██{/white-fg}';
const orangeBlock = '{cyan-fg}██{/cyan-fg}';
const rows = 24;
const cols = 14;
const iBlock = {
    forms: [[[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [blueBlock, blueBlock, blueBlock, blueBlock],
    [emptySpot, emptySpot, emptySpot, emptySpot]],

    [[emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [blueBlock, blueBlock, blueBlock, blueBlock],
    [emptySpot, emptySpot, emptySpot, emptySpot]],

    [[emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot],
    [emptySpot, blueBlock, emptySpot, emptySpot]],]
}
const squareBlock = {
    forms: [[[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot],
    [greenBlock, greenBlock, emptySpot, emptySpot]],]
}
const jBlock = {
    forms: [[[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [redBlock, redBlock, redBlock, emptySpot],
    [emptySpot, emptySpot, redBlock, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, redBlock, emptySpot, emptySpot],
    [emptySpot, redBlock, emptySpot, emptySpot],
    [redBlock, redBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [redBlock, emptySpot, emptySpot, emptySpot],
    [redBlock, redBlock, redBlock, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, redBlock, redBlock, emptySpot],
    [emptySpot, redBlock, emptySpot, emptySpot],
    [emptySpot, redBlock, emptySpot, emptySpot]],]
}
const lBlock = {
    forms: [[[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [yellowBlock, yellowBlock, yellowBlock, emptySpot],
    [yellowBlock, emptySpot, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [yellowBlock, yellowBlock, emptySpot, emptySpot],
    [emptySpot, yellowBlock, emptySpot, emptySpot],
    [emptySpot, yellowBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, yellowBlock, emptySpot],
    [yellowBlock, yellowBlock, yellowBlock, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, yellowBlock, emptySpot, emptySpot],
    [emptySpot, yellowBlock, emptySpot, emptySpot],
    [emptySpot, yellowBlock, yellowBlock, emptySpot]],]
}
const sBlock = {
    forms: [[[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, purpleBlock, purpleBlock, emptySpot],
    [purpleBlock, purpleBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [purpleBlock, emptySpot, emptySpot, emptySpot],
    [purpleBlock, purpleBlock, emptySpot, emptySpot],
    [emptySpot, purpleBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, emptySpot, emptySpot, emptySpot],
    [emptySpot, purpleBlock, purpleBlock, emptySpot],
    [purpleBlock, purpleBlock, emptySpot, emptySpot]],

    [[emptySpot, emptySpot, emptySpot, emptySpot],
    [purpleBlock, emptySpot, emptySpot, emptySpot],
    [purpleBlock, purpleBlock, emptySpot, emptySpot],
    [emptySpot, purpleBlock, emptySpot, emptySpot]]]
}
const tBlock = {
    forms: [
        [
            [emptySpot, emptySpot, emptySpot, emptySpot],
            [emptySpot, emptySpot, emptySpot, emptySpot],
            [whiteBlock, whiteBlock, whiteBlock, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot]
        ],
        [
            [emptySpot, emptySpot, emptySpot, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot],
            [whiteBlock, whiteBlock, emptySpot, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot]
        ],
        [
            [emptySpot, emptySpot, emptySpot, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot],
            [whiteBlock, whiteBlock, whiteBlock, emptySpot],
            [emptySpot, emptySpot, emptySpot, emptySpot]
        ],
        [
            [emptySpot, emptySpot, emptySpot, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot],
            [emptySpot, whiteBlock, whiteBlock, emptySpot],
            [emptySpot, whiteBlock, emptySpot, emptySpot]
        ],]
}
const zBlock = {
    forms: [[
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [orangeBlock, orangeBlock, emptySpot, emptySpot],
        [emptySpot, orangeBlock, orangeBlock, emptySpot]
    ],
    [
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [emptySpot, orangeBlock, emptySpot, emptySpot],
        [orangeBlock, orangeBlock, emptySpot, emptySpot],
        [orangeBlock, emptySpot, emptySpot, emptySpot]
    ],
    [
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [orangeBlock, orangeBlock, emptySpot, emptySpot],
        [emptySpot, orangeBlock, orangeBlock, emptySpot]
    ],
    [
        [emptySpot, emptySpot, emptySpot, emptySpot],
        [emptySpot, orangeBlock, emptySpot, emptySpot],
        [orangeBlock, orangeBlock, emptySpot, emptySpot],
        [orangeBlock, emptySpot, emptySpot, emptySpot]
    ],]
}

//populate empty board
const populateEmptyBoard = () => {
    let boardPieces = [];
    for (let r = 0; r < rows; r++) {
        boardPieces[r] = [];
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            boardPieces[i][j] = emptySpot;
        }
    }
    return boardPieces;
}

const boardToString = (boardTable) => {
    let boardString = "";

    for (let i = 3; i < rows - 1; i++) {
        for (let j = 2; j < cols - 2; j++) {
            boardString += boardTable[i][j];
            if (j == 11 && i != 22)
                boardString += '\n';
        }
    }
    return boardString
}

const randomBlock = () => {

    const blockNumber = Math.floor(Math.random() * 7);
    switch (blockNumber) {
        case 0:
            return iBlock;
        case 1:
            return squareBlock;
        case 2:
            return jBlock;
        case 3:
            return lBlock;
        case 4:
            return sBlock;
        case 5:
            return tBlock;
        case 6:
            return zBlock;
    }
}
const rotateBlock = (position, currentBlock, form, boardPieces) => {
    let rotateCheck = 1;
    let tempForm = form;
    if (form === 3) {
        tempForm = 0;
    }
    else {
        tempForm = form + 1;
    }
    for(let i = position[0]; i <= position[0]+3;i++){
        for(let j = position[1]; j <= position[1]+3;j++){
            if(currentBlock.forms[tempForm][i-position[0]][j-position[1]] != emptySpot){
                if(i>22 || j < 2 || j > 11)
                    rotateCheck = 0;
                if(boardPieces[i][j] != emptySpot && currentBlock.forms[form][i-position[0]][j-position[1]] == emptySpot)
                    rotateCheck = 0;
            }
        }
    }
    if(rotateCheck == 1){
        form = tempForm;
        for(let i = position[0]; i <= position[0]+3; i++){
            for (let j = position[1]; j <= position[1]+3; j++){
                boardPieces[i][j] = currentBlock.forms[form][i-position[0]][j-position[1]];
            }
        }
    }

    return {form:form,
    boardPieces:boardPieces,};
}
const maxDistance = (position,currentBlock,form,boardPieces,) => {
    let columnDistance = [20,20,20,20];
    let block = currentBlock.forms[form];
    for(let j = position[1]; j <=position[1]+3;j++){
        for(i = position[0] +3; i >= position[0]; i--){
            if(block[i-position[0]][j-position[1]] != emptySpot){
                let diff = 0;
                let k = i+1;

                while(boardPieces[k][j] ==emptySpot&& k < 23){
                    diff++;
                    k++;
                }
                i = 0;
                columnDistance[j-position[1]] = (diff < columnDistance[j-position[1]])?diff:columnDistance[j-position[1]];
            }
        }
    }
    let maxDistance = Math.min(...columnDistance);
    
    return maxDistance
}
const dropBlock = (position,currentBlock,form,boardPieces,maxDistance,done) => {
    let block = currentBlock.forms[form];
    if(maxDistance>0){
        for(let j = position[1]; j <=position[1]+3;j++){
            for(let i = position[0] +3; i >= position[0]; i--){
                if(block[i-position[0]][j-position[1]] != emptySpot){
                    boardPieces[i][j] = emptySpot;
                    boardPieces[i+1][j] = block[i-position[0]][j-position[1]];
                }
            }
        }
        position[0]++;
    }
    maxDistance--;
    if (maxDistance == 0)
        done = 1;
    return {
        boardPieces:boardPieces,
        done:done,
        maxDistance:maxDistance,
        position:position,
    }

}

const instantDrop = (position,maxDistance,currentBlock,form,boardPieces,done) => {
    let block = currentBlock.forms[form];
    for(let i = position[0]; i<= position[0]+3;i++){
        for(let j = position[1]; j<=position[1]+3;j++){
            if(block[i-position[0]][j-position[1]] != emptySpot)
                boardPieces[i][j] = emptySpot;
        }
    }
    position[0] = position[0] + maxDistance;
    for(let i = position[0]; i<= position[0]+3;i++){
        for(let j = position[1]; j<=position[1]+3;j++){
            if(block[i-position[0]][j-position[1]] != emptySpot)
                boardPieces[i][j] = block[i-position[0]][j-position[1]];
        }
    }
    done = 1;
    return {
        boardPieces:boardPieces,
        done:done,
    }
}

const maxLeftDistance = (position,currentBlock,form,boardPieces,) => {
    let rowDistance = [20,20,20,20];
    let block = currentBlock.forms[form];
    for(let i = position[0]; i <=position[0]+3;i++){
        for(let j = position[1]; j <= position[1]+3; j++){
            if(block[i-position[0]][j-position[1]] != emptySpot){
                let diff = 0;
                let k = j - 1;

                while(boardPieces[i][k] ==emptySpot&& k > 1){
                    diff++;
                    k--;
                }
                j = 3 + position[1];
                rowDistance[i-position[0]] = (diff < rowDistance[i-position[0]])?diff:rowDistance[i-position[0]];
            }
        }
    }
    let maxLeftD = Math.min(...rowDistance);
    
    return maxLeftD
}

const goLeft = (position,currentBlock,form,boardPieces,maxLeftDistance,done) => {
    let block = currentBlock.forms[form];
    if(maxLeftDistance>0){
        for(let i = position[0]; i <=position[0]+3;i++){
            for(let j = position[1] ; j <= position[1]+3; j++){
                if(block[i-position[0]][j-position[1]] != emptySpot){
                    boardPieces[i][j] = emptySpot;
                    boardPieces[i][j-1] = block[i-position[0]][j-position[1]];
                }
            }
        }
        position[1]--;
        maxLeftDistance--;
    }
    if (maxLeftDistance == 0)
        done = 1;
    return {
        boardPieces:boardPieces,
        done:done,
        maxLeftDistance:maxLeftDistance,
        position:position,
    }

}
const maxRightDistance = (position,currentBlock,form,boardPieces,) => {
    let rowDistance = [20,20,20,20];
    let block = currentBlock.forms[form];
    for(let i = position[0]; i <=position[0]+3;i++){
        for(let j = position[1]+3; j >= position[1]+0; j--){
            if(block[i-position[0]][j-position[1]] != emptySpot){
                let diff = 0;
                let k = j + 1;

                while(boardPieces[i][k] ==emptySpot&& k < 12){
                    diff++;
                    k++;
                }
                j = position[1];
                rowDistance[i-position[0]] = (diff < rowDistance[i-position[0]])?diff:rowDistance[i-position[0]];
            }
        }
    }
    let maxRightD = Math.min(...rowDistance);
    
    return maxRightD
}

const goRight = (position,currentBlock,form,boardPieces,maxRightDistance,done) => {
    let block = currentBlock.forms[form];
    if(maxRightDistance>0){
        for(let i = position[0]; i <=position[0]+3;i++){
            for(let j = position[1]+3 ; j >= position[1]+0; j--){
                if(block[i-position[0]][j-position[1]] != emptySpot){
                    boardPieces[i][j] = emptySpot;
                    boardPieces[i][j+1] = block[i-position[0]][j-position[1]];
                }
            }
        }
        position[1]++;
        maxRightDistance--;
    }
    if (maxRightDistance == 0)
        done = 1;
    return {
        boardPieces:boardPieces,
        done:done,
        maxRightDistance:maxRightDistance,
        position:position,
    }

}

const clearAbove = (i,boardPieces) => {
    for(let j = i-1; j>10; j--){
        for(let k = 2; k < 12; k++){
            boardPieces[j+1][k] = boardPieces[j][k];
        }

    }
    
    return boardPieces;

}
const clearLines = (boardPieces) => {
    for(let i = 22; i>5; i--){
        let count = 0;
        let start = 2;
        while(start < 12){
            if (boardPieces[i][start] != emptySpot)
                count++;
                start++;
        }
        if(count == 10)
            clearAbove(i,boardPieces);
    }
    return boardPieces;


}

module.exports = {
    populateEmptyBoard,
    boardToString,
    randomBlock,
    rotateBlock,
    dropBlock,
    maxDistance,
    instantDrop,
    goLeft,
    maxLeftDistance,
    maxRightDistance,
    goRight,
    clearAbove,
    clearLines,
}