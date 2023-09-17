// Add a 16x16 grid of square divs

const divSquare = document.createElement("div");

for (i = 1; i < 257; i++) {

    let divSquare = document.createElement("div");
    divSquare.classList.add('div-square');
    let div1Text = document.createTextNode(" ");
    divSquare.appendChild(div1Text);
    const element = document.getElementById("container");
    element.appendChild(divSquare);

}

// const testDiv = document.getElementById("test");

// function changeBackgroundColor() {
//     testDiv.setAttribute('style', 'background-color: black;');
//  }


// testDiv.addEventListener("mouseover", () => changeBackgroundColor());

const squareElements = document.querySelectorAll('div.div-square');


function changeBackgroundColor() {
    squareElements.setAttribute('style', 'background-color: black;');
 }


squareElements.addEventListener("mouseover", () => changeBackgroundColor());






