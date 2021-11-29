const canvas = id("canvas");
const ctx = canvas.getContext("2d");

const netWidth = 10;
const netHeight = 4000;

const paddleWidth = 10;
const paddleHeight = 100;

const net = {
    x: canvas.width / 2 - netWidth / 2,
    y: 0,
    width :netWidth,
    height: netHeight,
    color: "#FFF"
};

const user = {
    x: 10,
    y: "#FFF",
    width: paddleWidth,
    height: paddleHeight,
    color: "#FFF",
    score: 0
}

const ai = {
    x: canvas.width - (paddleWidth + 10),
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#FFF",
    score: 0
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: "#05EDFF"
}

const drawNet = () => {
    ctx.fillStyle = net.color;
    ctx. fillRect(net.x, net.y, net.width, net.height);
}

const drawScore = (x, y, score) => {
    ctx.fillStyle = "#fff";
    ctx.font = "35px san-serif";
    ctx.fillText(score, x, y);
}

const drawPaddle = (x, y ,width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

const drawBall = (x, y, radius, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

let upArrowPressed = false;
let downArrowPressed = false;

const render = () => {
    ctx.filstyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawNet();

    drawScore(canvas.width / 4, canvas.height / 6, user.score);
    drawScore(3 * canvas.width / 4, canvas.height / 6, ai.score);

    drawPaddle(user.x, user.y, user.width, user.height, user.color);
    drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);

    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

render();