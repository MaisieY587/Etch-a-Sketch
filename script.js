const container = document.querySelector('.container');
let gridSize = 16;
const squareSize = 15;

const button = document.querySelector('.size');
button.addEventListener('click', () => {
    let userInput = prompt('Please enter a number between 1-100: ');
    userInput = parseInt(userInput);

    if (userInput < 1 || userInput > 100) {
        alert('Please try again. The number needs to be between 1-100: ');
        return;
    }

    if (userInput !== null) {
        gridSize = userInput;
        createGrid(gridSize);
        
    }
})

function createGrid(gridSize) {
    container.replaceChildren();
    const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.8; // 80% of the viewport size
    const squareSize = containerSize / gridSize; // Calculate the size of each square

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;


    for (let i=0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = 'white';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        container.appendChild(square);
    
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
    }

}

createGrid(gridSize);

