// Generates a canvas given the grid dimensions
function createCanvas() {
    // TO DO: Make it so user chooses dimensions
    // *Temporarily: Create 16x16 grid
    const square_size = 512 / 16;
    const container = document.querySelector('.canvas');
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.height = square_size + 'px';
        square.style.width = square_size + 'px';
        container.appendChild(square);
    }
}