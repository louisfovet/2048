let matrixHtml = document.getElementById("matrix");

document.onkeydown = checkKey;

const probOf4 = 0.12; //used in generateNumber method


//Matrix of the game
let matrix = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];


//Renders our matrix variable
function renderMatrix() {

    matrixHtml.innerHTML = null;

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {

            matrixHtml.innerHTML += matrix[i][j];
            if(j != 3) matrixHtml.innerHTML += " | ";

        }
        matrixHtml.innerHTML += "<br/>";
    }
};


//Generates a new number (2, or 4 at probOf4 % of probability)
function generateNumber() {

    let weight = Math.random();
    let number;

    if(weight > probOf4) {
        number = 2;
    } else {
        number = 4;
    }

    return number;
};


//Looks for empty cells
function getEmptyCells() {

    let emptyCells = [];

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {

            if(matrix[i][j] == 0) {
                emptyCells.push([[i],[j]]);
            }
        }
    }

    return emptyCells;
};


//Adds new numbers for each play
function addingNumbers() {

    //Generates an index number to put the number in a random empty cell
    //Adds up to 2 numbers. Does not add any number if no empty cell.
    for(let i = 0; i < 2; i++) {
        if(getEmptyCells().length != 0) {

            let index = Math.floor(Math.random() * getEmptyCells().length);
            matrix[getEmptyCells()[index][0]][getEmptyCells()[index][1]] = generateNumber();

        }
    }
};


//Moves every cell up
function moveUp() {

    //Checks by column from up to down
    for(let j = 0; j < 4; j++) {
        for(let i = 1; i < 4; i++) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from up to cell
                for(let k = 0; k <= i; k++) {

                    //Moves the cell if one is empty
                    if(matrix[k][j] == 0) {
                        matrix[k][j] = matrix[i][j];
                        matrix[i][j] = 0;
                    }

                }

            }
        }
    }
};


//Moves every cell down
function moveDown() {

    //Checks by column from down to up
    for(let j = 0; j < 4; j++) {
        for(let i = 2; i >= 0; i--) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from down to cell
                for(let k = 3; k >= i; k--) {

                    //Moves the cell if one is empty
                    if(matrix[k][j] == 0) {
                        matrix[k][j] = matrix[i][j];
                        matrix[i][j] = 0;
                    }

                }

            }
        }
    }
};


//Moves every cell left
function moveLeft() {

    //Checks by line from left to right
    for(let i = 0; i < 4; i++) {
        for(let j = 1; j < 4; j++) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from left to cell
                for(let k = 0; k <= j; k++) {

                    //Moves the cell if one is empty
                    if(matrix[i][k] == 0) {
                        matrix[i][k] = matrix[i][j];
                        matrix[i][j] = 0;
                    }

                }
            }
        }
    }
};


//Moves every cell right
function moveRight() {

    //Checks by line from right to left
    for(let i = 0; i < 4; i++) {
        for(let j = 2; j >= 0; j--) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from right to cell
                for(let k = 3; k >= j; k--) {
                    
                    //Moves the cell if one is empty
                    if(matrix[i][k] == 0) {
                        matrix[i][k] = matrix[i][j];
                        matrix[i][j] = 0;
                    }

                }
            }

        }
    }

};


//User input
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        moveUp();
        addingNumbers();
        renderMatrix();
    }
    else if (e.keyCode == '40') {
        // down arrow
        moveDown();
        addingNumbers();
        renderMatrix();
    }
    else if (e.keyCode == '37') {
        // left arrow
        moveLeft();
        addingNumbers();
        renderMatrix();
    }
    else if (e.keyCode == '39') {
        // right arrow
        moveRight();
        addingNumbers();
        renderMatrix();
    }
};


renderMatrix();

