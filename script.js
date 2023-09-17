// Add a 16x16 grid of square divs

for (i = 1; i < 257; i++) {

    const divSquare = document.createElement("div");
    divSquare.classList.add('div-square');
    const div1Text = document.createTextNode(" ");
    divSquare.appendChild(div1Text);
    const element = document.getElementById("container");
    element.appendChild(divSquare);

}
