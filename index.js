let matrixHtml = document.getElementById("matrix");
let matrixDebugHtml = document.getElementById("matrix_debug");
let userInputHtml = document.getElementById("user_input");
let btnReset = document.getElementById("reset_btn");

document.onkeydown = userInput;

const probOf4 = 0.12; //used in generateNumber method

let matrix; //matrix of the game


//Initialize the matrix
function initializeMatrix() {
    matrix = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
}


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


//Renders our matrix variable
function renderDebugMatrix() {

    matrixDebugHtml.innerHTML = null;

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {

            matrixDebugHtml.innerHTML += matrix[i][j];
            if(j != 3) matrixDebugHtml.innerHTML += " | ";

        }
        matrixDebugHtml.innerHTML += "<br/>";
    }
};


//Initialize the game
function init() {
    initializeMatrix();
    addNumber();
    addNumber();
    renderDebugMatrix();
    renderMatrix();
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
function addNumber() {

    //Generates an index number to put the number in a random empty cell
    //Does not add any number if no empty cell.
    if(getEmptyCells().length != 0) {

        let index = Math.floor(Math.random() * getEmptyCells().length);
        matrix[getEmptyCells()[index][0]][getEmptyCells()[index][1]] = generateNumber();

    }

};


//Moves every cell up
function moveUp() {
    let moved = false;

    //Checks by column from up to down
    for(let j = 0; j < 4; j++) {

        //Stores the index of values that already merged
        let mergedCells = []; 

        for(let i = 1; i < 4; i++) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from cell to up to either move it or merge it
                for(let k = i; k > 0; k--) {

                    //Moves the cell if the next one is empty
                    if(matrix[k-1][j] == 0) {

                        matrix[k-1][j] = matrix[k][j];
                        matrix[k][j] = 0;
                        moved = true;

                    } 
                    //Add value together if next one is equal
                    else if ((matrix[k][j] == matrix[k-1][j])
                        && (!mergedCells.includes(k-1))
                        && (!mergedCells.includes(k))) {

                        matrix[k-1][j] += matrix[k][j];
                        matrix[k][j] = 0;
                        moved = true;
                        mergedCells.push(k-1);

                        break;
                    }
                }
            }
        }
    }
    return moved;
};


//Moves every cell down
function moveDown() {
    let moved = false;

    //Checks by column from down to up
    for(let j = 0; j < 4; j++) {

        //Stores the index of values that already merged
        let mergedCells = []; 

        for(let i = 2; i >= 0; i--) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from cell to down to either move it or merge it
                for(let k = i; k < 3; k++) {

                    //Moves the cell if the next one is empty
                    if(matrix[k+1][j] == 0) {

                        matrix[k+1][j] = matrix[k][j];
                        matrix[k][j] = 0;
                        moved = true;

                    } 
                    //Add value together if next one is equal
                    else if ((matrix[k][j] == matrix[k+1][j])
                        && (!mergedCells.includes(k+1))
                        && (!mergedCells.includes(k))) {

                        matrix[k+1][j] += matrix[k][j];
                        matrix[k][j] = 0;
                        moved = true;
                        mergedCells.push(k+1);

                        break;
                    }
                }
            }
        }
    }
    return moved;
};


//Moves every cell left
function moveLeft() {
    let moved = false;

    //Checks by line from left to right
    for(let i = 0; i < 4; i++) {

        //Stores the index of values that already merged
        let mergedCells = []; 

        for(let j = 1; j < 4; j++) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from cell to left to either move it or merge it
                for(let k = j; k > 0; k--) {

                    //Moves the cell if the next one is empty
                    if(matrix[i][k-1] == 0) {

                        matrix[i][k-1] = matrix[i][k];
                        matrix[i][k] = 0;
                        moved = true;

                    } 
                    //Add value together if next one is equal
                    else if ((matrix[i][k] == matrix[i][k-1])
                     && (!mergedCells.includes(k-1))
                     && (!mergedCells.includes(k))) {

                        matrix[i][k-1] += matrix[i][k];
                        matrix[i][k] = 0;
                        moved = true;
                        mergedCells.push(k-1);

                        break;
                    }
                }
            }
        }
    }
    return moved;
};


//Moves every cell right
function moveRight() {
    let moved = false;

    //Checks by line from right to left
    for(let i = 0; i < 4; i++) {

        //Stores the index of values that already merged
        let mergedCells = []; 

        for(let j = 2; j >= 0; j--) {

            //If cell not 0, we want to move the number
            if(matrix[i][j] != 0) {

                //Checks from cell to right to either move it or merge it
                for(let k = j; k < 3; k++) {

                    //Moves the cell if the next one is empty
                    if(matrix[i][k+1] == 0) {

                        matrix[i][k+1] = matrix[i][k];
                        matrix[i][k] = 0;
                        moved = true;

                    } 
                    //Add value together if next one is equal
                    else if ((matrix[i][k] == matrix[i][k+1])
                     && (!mergedCells.includes(k+1))
                     && (!mergedCells.includes(k))) {

                        matrix[i][k+1] += matrix[i][k];
                        matrix[i][k] = 0;
                        moved = true;
                        mergedCells.push(k+1);
                    
                        break;
                    }
                }
            }
        }
    }
    return moved;
};


//User input
function userInput(e) {
    e = e || window.event;

    let arrowPressed = false; //if user pressed a key
    let moved = false; //if moveXX() triggered a movement

    if (e.keyCode == '38') {
        // up arrow
        userInputHtml.innerHTML = "up";
        renderDebugMatrix();
        moved = moveUp();
        arrowPressed = true;
    }
    else if (e.keyCode == '40') {
        // down arrow
        userInputHtml.innerHTML = "down";
        renderDebugMatrix();
        moved = moveDown();
        arrowPressed = true;
    }
    else if (e.keyCode == '37') {
        // left arrow
        userInputHtml.innerHTML = "left";
        renderDebugMatrix();
        moved = moveLeft();
        arrowPressed = true;
    }
    else if (e.keyCode == '39') {
        // right arrow
        userInputHtml.innerHTML = "right";
        renderDebugMatrix();
        moved = moveRight();
        arrowPressed = true;
    }

    if(moved) addNumber(); //only adds a number if movement occured
    renderMatrix();
    
};




init();




btnReset.onclick = function() {
    init();
};
