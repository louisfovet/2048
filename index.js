let matrixHtml = document.getElementById("matrix");
const probOf4 = 0.12; //used in generateNumber method

//Matrix of the game
// let matrix = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0]
// ];

//Matrix of the game
let matrix = [
    [2,2,0,2],
    [2,0,2,2],
    [2,2,2,2],
    [0,2,2,0]
];

//Rendering our matrix variable
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

//Look for empty cells
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

//Adding new numbers for each play
function addingNumbers() {

}

renderMatrix();
console.log(getEmptyCells());
