const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Circle
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Rotating line
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + 100 * Math.cos(angle), 200 + 100 * Math.sin(angle));
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 4;
    ctx.stroke();

    angle += 0.05;
    requestAnimationFrame(draw);
}

draw();
