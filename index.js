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
}

//Adds new numbers for each play
function addingNumbers() {
    //Generates an index number to put the number in a random empty cell
    for(let i = 0; i < 2; i++) {
        let index = Math.floor(Math.random() * getEmptyCells().length);
        matrix[getEmptyCells()[index][0]][getEmptyCells()[index][1]] = generateNumber();
    }
}

//Moves every cell up
function moveUp() {

}

//Moves every cell down
function moveDown() {

}

//Moves every cell left
function moveLeft() {

}

//Moves every cell right
function moveRight() {

}

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
        moveUp();
        addingNumbers();
        renderMatrix();
    }
    else if (e.keyCode == '37') {
        // left arrow
        moveUp();
        addingNumbers();
        renderMatrix();
    }
    else if (e.keyCode == '39') {
        // right arrow
        moveUp();
        addingNumbers();
        renderMatrix();
    }
}


renderMatrix();

