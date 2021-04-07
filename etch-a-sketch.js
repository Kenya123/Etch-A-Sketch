//store DOM elements to manipulate
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const darkButton = document.querySelector(".dark-mode");
 
//adds event listeners to window, the resize button and the darkMode button
window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);
darkButton.addEventListener("click", darkMode);

//sets the default 16*16 grid size when page is loaded
function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

// uses css grid to create columns depending on the size entered 
function setGridSize(size) {
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//creates divs for each square in the grid and adds listener
function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);

}}
// generate random colors to fill the grid with
function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

//allows user to alter size of grid via prompt
function changeSize() {
  let newSize = prompt("Enter a new size: ");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number in the range 1-64");
      changeSize();}

      else { clearGrid();
             setGridSize(newSize);
            fillGrid(newSize);}
  }}

// removes grid elements to allow size to be changed
function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {gridContainer.removeChild(element);
  });
}

// this function makes elements dark when button clicked reverts to light when clicked again
function darkMode() {
    let body_color = document.body.style.backgroundColor; 
    if (body_color === "black") {
	document.body.style.backgroundColor = "#c7c1c1";
	darkButton.style.backgroundColor = "black";}
    else {
	document.body.style.backgroundColor = "black";
	darkButton.style.backgroundColor = "white";
	}}

