let matrixHtml = document.getElementById("matrix");

//Matrix of the game
let matrix = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

//Rendring our matrix variable
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

//Generates a new number (2 or 4)
function generateNumber() {
    number = (Math.floor(Math.random()*2)+1)*2;
    return number;
};


renderMatrix();
console.log(generateNew());
