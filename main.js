const grid = document.getElementById("grid");
const reset = document.getElementById("reset");
const numInitialSquares = 16;

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

grid.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "rgb(0, 0, 0, 1)";
});

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