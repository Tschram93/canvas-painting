// Selectors
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');


// Variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;


// Resize the canvas from the default of 800x800px
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = '#BADASS';

// Functions

function draw(e) {
    if (!isDrawing)
        return;
    // Stops the function from running if the mouse is not clicked down
    console.log(e);
    ctx.beginPath();
    //  Start from
    ctx.moveTo(lastX, lastY);
    //  Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
}

//  EventListners
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);