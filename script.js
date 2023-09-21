// Add a 16x16 grid of square divs

const element = document.getElementById("container");

for (let i = 1; i < 16; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("div-square", "first");
    element.appendChild(div1);

    for (let j = 1; j < 16; j++) {
        let div2 = document.createElement("div");
        div2.classList.add("div-square", "others");
        div1.appendChild(div2);
    }
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

    // Create new grid in same total space as before for new sketch pad
    for (let i = 0; i < gridSizeInteger; i++) {
        let div1 = document.createElement("div");
        div1.classList.add("div-square", "first");
        element.appendChild(div1);

        for (let j = 0; j < gridSizeInteger; j++) {
            let div2 = document.createElement("div");
            div2.classList.add("div-square", "others");
            div1.appendChild(div2);
        }
    }

    // When user mouseovers cells, make background of each cell black
    for (let k = 0; k < divSquare.length; k++) {
        divSquare[k].addEventListener("mouseover", function changeBackgroundColor() {
            divSquare[k].style.backgroundColor = "black";
        });
      }

}

// Assign button to javascript variable
const gridSizeButton = document.getElementById("button").onclick = askForGridSize;

let divSquare = document.getElementsByClassName("div-square");

// When user mouseovers cells, make background of each cell black
    for (let k = 0; k < divSquare.length; k++) {
        divSquare[k].addEventListener("mouseover", function changeBackgroundColor() {
            divSquare[k].style.backgroundColor = "black";
        });
      }
