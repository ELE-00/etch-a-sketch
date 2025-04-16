//Main container of the page
const mainContainer = document.querySelector(".mainContainer");

//Container for the button
const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

const gridButton = document.createElement("button");
    gridButton.textContent = "Create Grid";
    gridButton.classList.add("button");
    gridButton.addEventListener("click", () => {
        const userInput = prompt("Enter value 1-100")
        deleteGrid();
        createGrid(userInput);
    });

buttonContainer.appendChild(gridButton);
mainContainer.appendChild(buttonContainer);

//Container for the grid
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

mainContainer.appendChild(gridContainer);
 

//Function created boxes based on value x value
function createGrid(userInput){
    
    const container = document.querySelector(".gridContainer");

    //Adjusts the grid container dimensions based on the userInput value
    let boxSize = 30;
    container.style.width = `${boxSize * userInput}px`;
    container.style.height = `${boxSize * userInput}px`;

    //Loop to create a grid of divs
    let gridSize = userInput * userInput;
    for(i = 0; i < gridSize; i++) {
        //On each iteration, 9 boxes must be created or value * value
        const box = document.createElement("div");
            box.classList.add("gridBox");
        container.appendChild(box);
    }

    //Mouse "Hover" effect coloring the boxes
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = rgbColor();

        });
    });

}


//Function to delete the grid
function deleteGrid(){
    const gridBoxes = document.querySelectorAll(".gridBox");
        gridBoxes.forEach(box => box.remove());
};


const gridBoxes = document.querySelectorAll(".gridBox");


//Randomize rgb colors
function rgbColor() {
    let blue = Math.floor(Math.random() * 255);
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    newRGB = "rgb(" + blue +","+ red +","+ green + ")";
    return newRGB;
};


//Calls functions when loading page
createGrid(16);
    
