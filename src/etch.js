const containerSize = 560;
let gameMode = "black";

//buttons
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');

const container = document.querySelector(".container");
container.setAttribute('style', 'display: flex; flex-wrap: wrap;')
container.style.width = container.style.height = containerSize + 'px';

let sides = 16;

mode(gameMode);
generateGrid(sides);

function generateGrid(sides) {
    var length = containerSize / sides;
    for (var i = 0; i < sides; i++) {
        for (var j = 0; j < sides; j++) {
            const square = document.createElement("div");
            square.classList.add('square');
            square.style.height = length + 'px';
            square.style.width = length + 'px';
            square.style.backgroundColor = 'white';
            container.appendChild(square);
        }
    }
}


function destroyGrid() {
    const square = document.querySelectorAll('.square');
    square.forEach(function(div) {
        div.parentNode.removeChild(div)
    });
}

//not useful
function clearGrid() {
    const square = document.querySelectorAll('.square');
    square.forEach(div => (div.style.backgroundColor = "#c4c4c4"));
}

function randomNumber() {
    var num = Math.floor(Math.random() * 255);
    return num;
}

function mode(gameMode) {
    container.addEventListener('mouseover',
        e => {
            if (gameMode == "black") {
                e.target.style.backgroundColor = 'black';
                e.target.style.opacity = 1.1;
            } else if (gameMode == "rainbow") {
                var r = randomNumber();
                var g = randomNumber();
                var b = randomNumber();
                e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                e.target.style.opacity = 1.1;
            }
        });
}

clear.addEventListener('click', e => {
    destroyGrid();
    sides = prompt("Enter a number for the number of squares per side\n\n DISCLAIMER: " +
        "Might break if number is too high. It's not my fault that you're demanding.");
    generateGrid(sides);
})

black.addEventListener('click', e => {
    gameMode = 'black';
    mode(gameMode);
})

rainbow.addEventListener('click', e => {
    gameMode = 'rainbow';
    mode(gameMode);
})