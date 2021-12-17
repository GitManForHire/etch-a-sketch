const grid = document.getElementById("grid");
const reset = document.getElementById("reset");
const numInitialSquares = 16;
const brightnessDecrease = 0.1;
const regExp = /\(([^)]+)\)/;

// Populate grid with an inital number of squares (16 x 16)
for (let i = 0; i < numInitialSquares; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  grid.appendChild(row);
  
  for (let j = 0; j < numInitialSquares; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
}

// Decrease the brightness value of a square on mouseover event
grid.addEventListener("mouseover", function(event) {
  compStyles = window.getComputedStyle(event.target);
  const filterValue = compStyles.getPropertyValue("filter");
  const brightnessValue = regExp.exec(filterValue);
  let numBrightnessValue = Number(brightnessValue[1]);
  
  if (numBrightnessValue > 0) {
    numBrightnessValue -= brightnessDecrease;
    event.target.style.filter = `brightness(${numBrightnessValue})`;
  }
});

// When clicked, prompt user to input a number and repopulate the grid using that number of squares
reset.addEventListener("click", function(event) {
  let numSquares = 0;
  while (numSquares <= 0 || numSquares > 100) {
    numSquares = prompt("Enter the number of squares to be used per side for the new grid:");
  }
  
  grid.innerHTML = "";
  
  for (let k = 0; k < numSquares; k++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    
    for (let l = 0; l < numSquares; l++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
});