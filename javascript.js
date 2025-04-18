//Main container of the page
const mainContainer = document.querySelector(".mainContainer");

//Header container + text
const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");

const headerText = document.createElement("h1");
    headerText.classList.add("headertext");
    headerText.textContent = "Etch-A-Sketch" ;

const bodyText = document.createElement("p");
    bodyText.classList.add("bodytext");
    bodyText.textContent = "Hover your mouse over the grid to change the color!";
    
const bodyText2 = document.createElement("p");
    bodyText2.classList.add("bodytext");
    bodyText2.textContent = "Change the grid size if you want :)" ;

headerContainer.appendChild(headerText);
headerContainer.appendChild(bodyText);
headerContainer.appendChild(bodyText2);
mainContainer.appendChild(headerContainer);


//Container for the button
const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

const gridButton = document.createElement("button");
    gridButton.textContent = "Create Grid";
    gridButton.classList.add("button");
    gridButton.addEventListener("click", () => {
        let userInput;
        do {
         userInput = parseInt(prompt("Enter a value between 1 and 100:"));
        } while (isNaN(userInput) || userInput < 1 || userInput > 100);
        deleteGrid();
        createGrid(userInput);
    });

buttonContainer.appendChild(gridButton);
mainContainer.appendChild(buttonContainer);

//Container for the grid
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

mainContainer.appendChild(gridContainer);
 

//Footer container
const footerContainer = document.createElement("div");
    footerContainer.classList.add("footerContainer");
mainContainer.appendChild(footerContainer);

//Function created boxes based on value x value
function createGrid(userInput){
    
    const container = document.querySelector(".gridContainer");

    //Loop to create a grid of divs
    let gridSizePx = 480;
    let gridSize = userInput * userInput;
    for(i = 0; i < gridSize; i++) {
        //On each iteration, 9 boxes must be created or value * value
        const box = document.createElement("div");
            box.classList.add("gridBox");
            box.style.width = `${gridSizePx / userInput}px`;
            box.style.height = `${gridSizePx / userInput}px`;
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
    
