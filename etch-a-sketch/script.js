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

function createGrid(numSquares) {
    let maxNumSquares = 100
    const container = document.querySelector("#container");
    for (let i = 1; i <= numSquares*numSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `calc(100% / ${numSquares})`;
      square.style.border = `${0.1 + ((maxNumSquares - numSquares) / 100)}px solid black`;
      container.appendChild(square);
    }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
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

function resetGrid() {
  const numSquares = parseInt(prompt("Enter number of squares per side (maximum 100):"));
  if (numSquares && numSquares <= 100) {
    clearGrid();
    createGrid(numSquares);
    addEventListeners();
  } else {
    alert("Invalid input!");
  }
}

function readyPage() {
    createGrid(16);
    addEventListeners();
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", resetGrid);
}

readyPage();