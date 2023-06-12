const container = document.querySelector("#container");
const containerWidth = getComputedStyle(document.querySelector("#container")).width;
const containerHeight = getComputedStyle(document.querySelector("#container")).height;

const gridSlider = document.querySelector("#grid-size");
gridSlider.addEventListener("click", newGrid);
gridSlider.addEventListener("click", showGridSize);

let gridSize = 24;

const clearButton = document.querySelector("#clear-grid");
clearButton.addEventListener("click", clearGrid);
clearButton.addEventListener("click", createGrid);

createGrid();

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = container.appendChild(document.createElement("div"));
        for (let j = 0; j < gridSize; j++) {
            const squareSize = +containerWidth.slice(0, (containerWidth.length - 2)) / +gridSize;
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "darkslategray";
            });

            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            row.appendChild(square);
        }
    }
}

function clearGrid() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.remove());
}

function newGrid() {
    clearGrid();
    gridSize = gridSlider.value;
    createGrid(gridSize);
}

function showGridSize() {
    const gridSliderValue = document.querySelector(`label[for="grid-size"]`);
    gridSliderValue.textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`;
}
