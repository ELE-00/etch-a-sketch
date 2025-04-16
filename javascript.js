
//Task
//1. Create 16x16 grid 
//2. "hover" effect - divs should change color when the mouse enters and leaves a div
//3. Create a button that will send a popup aksing for the number of squares for the new grid. Old grid disapears, new shows up.
//Bonus: Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
    //1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
    //2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.



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
            box.style.backgroundColor = "blue";
        });
    });

}


//Function to delete the grid
function deleteGrid(){
    const gridBoxes = document.querySelectorAll(".gridBox");
        gridBoxes.forEach(box => box.remove());
};


const gridBoxes = document.querySelectorAll(".gridBox");






//Calls functions when loading page
createGrid(16);
    
