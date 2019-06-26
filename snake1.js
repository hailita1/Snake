const WIDTH_MAP = document.getElementById("myCanvas").offsetWidth;
const HEIGHT_MAP = document.getElementById("myCanvas").offsetHeight;


const CIRCLE_SIZE = 20;
const SNAKE_SIZE = 20;
const SPEED_SNAKE = 20;

let Snake = function (WIDTH_MAP, HEIGHT_MAP, speed) {
    this.posX = Math.random() * WIDTH_MAP;
    this.posY = Math.random() * HEIGHT_MAP;
    this.speed = SPEED_SNAKE;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawSnake = function () {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.posX, this.posY, SNAKE_SIZE, SNAKE_SIZE);
    };
    this.clearSnake = function () {
        this.ctx.clearRect(this.posX - 2, this.posY, SNAKE_SIZE * 1.2, SNAKE_SIZE);
    };
    this.diLen = function () {
        if (this.posY >= HEIGHT_MAP *0.2) {
            this.clearSnake();
            this.posY -= speed;
            this.drawSnake();
        }
    };
    this.diXuong = function () {
        if (this.posY <= HEIGHT_MAP * 0.94) {
            this.clearSnake();
            this.posY += speed;
            this.drawSnake();
        }
    };
    this.diPhai = function () {
        if (this.posX <= WIDTH_MAP * 0.95) {
            this.clearSnake();
            this.posX += speed;
            this.drawSnake();
        }
    };
    this.diTrai = function () {
        if (this.posX >= 1.2) {
            this.clearSnake();
            this.posX -= speed;
            this.drawSnake();
        }
    };
};

let Circle = function (WIDTH_MAP, HEIGHT_MAP) {
    this.posX = Math.random() * WIDTH_MAP - CIRCLE_SIZE;
    this.posY = Math.random() * HEIGHT_MAP - CIRCLE_SIZE;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.draw = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.posX, this.posY, CIRCLE_SIZE, CIRCLE_SIZE);
    };
    this.clear = function () {
        this.ctx.clearRect(this.posX - 2, this.posY, CIRCLE_SIZE * 1.2, CIRCLE_SIZE);
    }
};
let circle = new Circle(WIDTH_MAP, HEIGHT_MAP);
circle.draw();
let snake = new Snake(WIDTH_MAP, HEIGHT_MAP, 20);
snake.drawSnake();
move = function (event) {
    switch (event.keyCode) {
        case 38:
            snake.diLen();
            break;
        case 39:
            snake.diPhai();
            break;
        case 40:
            snake.diXuong();
            break;
        case 37:
            snake.diTrai();
            break;
    }
};
function ready() {
    window.addEventListener('keydown', move);
}
window.onload = function () {
    ready();
};



