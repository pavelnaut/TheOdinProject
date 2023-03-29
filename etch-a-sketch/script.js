function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function darkenColor(color, amount) {
    let match = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
    let r = Math.floor(parseInt(match[1]) * (1 - amount / 100));
    let g = Math.floor(parseInt(match[2]) * (1 - amount / 100));
    let b = Math.floor(parseInt(match[3]) * (1 - amount / 100));
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid() {
    let container = document.querySelector("#container");
    for (let i = 1; i <= 16*16; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
}

function addEventListeners() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
        let currentColor = square.style.backgroundColor || "rgb(255, 255, 255)";
        if (currentColor === "rgb(255, 255, 255)") {
            square.style.backgroundColor = randomColor();
        } else {
            square.style.backgroundColor = darkenColor(currentColor, 10);
        }
        });
    });
}

createGrid();
addEventListeners();