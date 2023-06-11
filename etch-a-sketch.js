const container = document.querySelector("#container");
const containerWidth = getComputedStyle(document.querySelector("#container")).width;
const containerHeight = getComputedStyle(document.querySelector("#container")).height;

const gridSize = prompt("Enter a positive number up to 100: ");
const boxSize = +containerWidth.slice(0, (containerWidth.length - 2)) / +gridSize;

function createGrid() {
    while ((gridSize < 1 || gridSize > 100) || isNaN(gridSize)) {
        gridSize = prompt("Try again! Between 0 and 100.");
    }
    for (let i = 1; i < gridSize; i++) {
        const row = container.appendChild(document.createElement("div"));
        for (let j = 1; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "darkslategray";
            });
            square.style.width = boxSize + "px";
            square.style.height = boxSize + "px";
            row.appendChild(square);
        }
    }
}

createGrid();
