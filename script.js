// Selectors
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');


// Variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let hue = 0;


// Resize the canvas from the default of 800x800px
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = '#BADASS';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';

// Functions

function draw(e) {
    if (!isDrawing)
        return;
    // Stops the function from running if the mouse is not clicked down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    //  Start from
    ctx.moveTo(lastX, lastY);
    //  Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++;

    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    // Incrementing from 0 to 100
    if (direction) {
        ctx.lineWidth++;
    } // Once it hits 100 it works from 99 on back down
    else {
        ctx.lineWidth--;
    }

}

//  EventListners
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);