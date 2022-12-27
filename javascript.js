// Generates a canvas given the grid dimensions
function createCanvas(dim) {
    // TO DO: Make it so user chooses dimensions
    // *Temporarily: Create 16x16 grid
    const square_size = 512 / dim;
    const container = document.querySelector('.canvas');
    // Remove previous squares
    document.querySelectorAll('.square').forEach(e => e.remove());

    for (let i = 0; i < dim * dim; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.height = square_size + 'px';
        square.style.width = square_size + 'px';
        container.appendChild(square);
    }
}

// Add event listener to squares
function addListener() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.classList.add("hovered");
        })
    })
}

// Load initial canvas
createCanvas(32);
addListener();

// Prompt user for dimensions when button is clicked
function promptDimensions() {
    let text;
    let size = prompt("Enter width/height of canvas (max 100):", "32");
    if (size === null || size === "") {
        text = "user canceled the prompt";
    }
    else if (size > 100 || size < 1) {
        text = "you can only pick a number from 1 - 100"
    }
    else {
        createCanvas(size);
        addListener();
        text = "";
    }
    document.getElementById("output").innerHTML = text;
}