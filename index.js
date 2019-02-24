let matrixHtml = document.getElementById("matrix");

let matrix = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];


function renderMatrix() {
    matrixHtml.innerHTML = null;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            matrixHtml.innerHTML += matrix[i][j]
            if(j != 3) matrixHtml.innerHTML += " | "
        }
        matrixHtml.innerHTML += "<br/>"
    }
};


renderMatrix();
