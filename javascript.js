
//Task
//1. Create 16x16 grid 
//2. "hover" effect - divs should change color when the mouse enters and leaves a div
//3. Create a button that will send a popup aksing for the number of squares for the new grid. Old grid disapears, new shows up.
//Bonus: Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
    //1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
    //2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.



//-----------Pseudocode--------------//


// Create a function that creates a grid based on a number from 1-100
    //Create a griv value variable -----CHECK
    //for loop to create a grid of divs -----CHECK
    //The boxes should dinamically wrap based on value

//Create a button
//Add an event listener to trigger a prompt asking taking a number 1-100, then executing a grid function
 //---------------------------------------//


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
 



//Grid size value
// let value = 3; //Grid 3x3 which is 9 squares

//Function created boxes based on value x value
function createGrid(userInput){
    const container = document.querySelector(".gridContainer");

    let gridSize = userInput * userInput;
    for(i = 0; i < gridSize; i++) {
        //On each iteration, 9 boxes must be created or value * value
        const box = document.createElement("div");
            box.classList.add("gridBox");
        container.appendChild(box);
    }
}

function deleteGrid(){
    const gridBoxes = document.querySelectorAll(".gridBox");
        gridBoxes.forEach(box => box.remove());
};

createGrid(16);
    
