const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");

let gridSize = prompt("Enter a positive number up to 100: ");

function createGrid() {
    while ((gridSize < 1 || gridSize > 100) || isNaN(gridSize)) {
        gridSize = prompt("Try again! Between 0 and 100.");
    }
    for (let i = 0; i < gridSize; i++) {
        const row = grid.appendChild(document.createElement("div"));
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "darkslategray";
            });
            row.appendChild(square);
        }
    }
    container.appendChild(grid);
}

createGrid();
