const container = document.querySelector('.container');
const gridSize = 16;

for (let i=0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    });

}
