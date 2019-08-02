const containerSize = 300;
let gameMode = "shader";

const black = document.querySelector('#black');
const shader = document.querySelector('#shader');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');

const container = document.querySelector(".container");
container.setAttribute('style', 'display: flex; flex-wrap: wrap;')
container.style.width = container.style.height = containerSize + 'px';

let sides = 16;

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

function clearGrid() {
    const square = document.querySelectorAll('.square');
    square
}

container.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'black';
})

clear.addEventListener('click', e => {
            document.location.reload();
            sides = prompt("Enter a number for the number of squares per side\n\n DISCLAIMER: " +
                "Might break if number is too high. It's not my fault that you're demanding.");
            generateGrid(sides);
        }