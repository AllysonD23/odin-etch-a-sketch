// Add a 16x16 grid of square divs

const element = document.getElementById("container");

for (i = 1; i < 257; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("div-square");
    element.appendChild(div1);
}

let divSquare = document.getElementsByClassName("div-square");

// When user mouseovers cells, make background of each cell black
    for (let i = 0; i < divSquare.length; i++) {
        divSquare[i].addEventListener("mouseover", function changeBackgroundColor() {
            divSquare[i].style.backgroundColor = "black";
        });
      }

// Ask user for number of squares per side for the new grid. 

let gridSize;
let gridSizeInteger;

function askForGridSize() {
     gridSize = prompt("Enter number of squares per side for sketch pad:");

    // Set the limit for the user input to a maximum of 100.
    gridSizeInteger = parseInt(gridSize);
    if (gridSizeInteger < 0 || gridSizeInteger > 100) gridSizeInteger = "ERROR";

    // Remove existing grid
    while(divSquare[0]) {
        divSquare[0].parentNode.removeChild(divSquare[0]);
    }

    let gridSideSize = gridSizeInteger*gridSizeInteger + 1;

    // Create new grid in same total space as before for new sketch pad
    for (i = 1; i < gridSideSize; i++) {
        let div1 = document.createElement("div");
        div1.classList.add("div-square");
        element.appendChild(div1);
    }

}

// Assign button to javascript variable
const gridSizeButton = document.getElementById("button").onclick = askForGridSize;


