const WIDTH_MAP = document.getElementById("myCanvas").offsetWidth - 20;
const HEIGHT_MAP = document.getElementById("myCanvas").offsetHeight - 20;


const CIRCLE_SIZE = 20;
const SNAKE_SIZE = 20;
const SPEED_SNAKE = 20;

let Snake = function (WIDTH_MAP, HEIGHT_MAP, speed) {
    this.snakeX = 15;
    this.snakeY = 15;
    this.speedX = speed;
    this.speedY = speed;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawSnake = function () {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.snakeX, this.snakeY, SNAKE_SIZE, SNAKE_SIZE);
    };
    this.clearSnake = function () {
        this.ctx.clearRect(this.snakeX - 2, this.snakeY - 2, SNAKE_SIZE * 1.2, SNAKE_SIZE * 1.2);
    };
    this.diLen = function () {
        if (this.snakeY > 0) {
            this.clearSnake();
            this.snakeY -= this.speedY;
            // this.speedX = 0;
            this.drawSnake();
        } else if (this.snakeY <= 0) {
            this.snakeY = 0;
        }
        console.log(this.snakeY);
    };
    this.diXuong = function () {
        if (this.snakeY <= HEIGHT_MAP - SNAKE_SIZE) {
            this.clearSnake();
            this.snakeY = 20;
            this.snakeY += this.speedY;
            // this.speedX = 0;
            this.drawSnake();
        }
        if (this.snakeY >= HEIGHT_MAP - SNAKE_SIZE) {
            this.snakeY = HEIGHT_MAP - SNAKE_SIZE;
        }
    };
    this.diPhai = function () {
        if (this.snakeX <= WIDTH_MAP - SNAKE_SIZE) {
            this.clearSnake();
            this.snakeX += this.speedX;
            this.speedY = 0;
            this.drawSnake();
        }

    };
    this.diTrai = function () {
        if (this.snakeX > 0) {
            this.clearSnake();
            this.snakeX -= this.speedX;
            this.speedY = 0;
            this.drawSnake();
        } else if (this.snakeX <= 0) {
            this.snakeX = 0;
        }
    };
    this.getX = function () {
        return this.snakeX;
    };
    this.getY = function () {
        return this.snakeY;

    }
};
let Circle = function (WIDTH_MAP, HEIGHT_MAP) {
    this.circleX = Math.random() * WIDTH_MAP;
    this.circleY = Math.random() * HEIGHT_MAP;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.draw = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.circleX, this.circleY, CIRCLE_SIZE, CIRCLE_SIZE);
    };
    this.clear = function () {
        this.ctx.clearRect(this.circleX - 2, this.circleY, CIRCLE_SIZE * 1.2, CIRCLE_SIZE);
    }
};
let circle = new Circle(WIDTH_MAP, HEIGHT_MAP);
circle.draw();
let snake = new Snake(WIDTH_MAP, HEIGHT_MAP, 2);
snake.drawSnake();
move = function (event) {
    switch (event.keyCode) {
        case 38:
            runLen();
            break;
        case 39:
            runPhai();
            break;
        case 40:
            runXuong();
            break;
        case 37:
            runTrai();
            break;
    }
    requestAnimationFrame(move);
};

function ready() {
    window.addEventListener('keydown', move);
}

window.onload = function () {
    ready();
};

function runPhai() {
    snake.diPhai();
    requestAnimationFrame(runPhai);
}

function runTrai() {
    snake.diTrai();
    requestAnimationFrame(runTrai);
}

function runLen() {
    snake.diLen();
    requestAnimationFrame(runLen);
}

function runXuong() {
    snake.diXuong();
    requestAnimationFrame(runXuong);
}