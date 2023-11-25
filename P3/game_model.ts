let game_screen: HTMLCanvasElement;
let game_context: CanvasRenderingContext2D;

let platformWidth: number;
let platformHeight: number;
let platformX: number;
let platformY: number;

let objectRadius: number;
let objectX: number;
let objectY: number;
let objectSpeed: number;

let score: number;
let gameRunning: boolean;

document.addEventListener("DOMContentLoaded", function () {
  game_screen = document.getElementById("game_screen") as HTMLCanvasElement;
  game_context = game_screen.getContext("2d") as CanvasRenderingContext2D;

  platformWidth = 100;
  platformHeight = 20;
  platformX = (game_screen.width - platformWidth) / 2;
  platformY = game_screen.height - platformHeight;

  objectRadius = 10;
  objectX =
    Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;
  objectY = 0;
  objectSpeed = 2;

  score = 0;
  gameRunning = false;

  start_button = document.getElementById("start_button") as HTMLButtonElement;
  start_button.onclick = startGame;

  updateGameArea(); // Para garantir que o jogo seja desenhado assim que o DOM estiver pronto
});

function drawPlatform() {
  game_context.beginPath();
  game_context.rect(platformX, platformY, platformWidth, platformHeight);
  game_context.fillStyle = "white";
  game_context.fill();
  game_context.closePath();
}

function drawObject() {
  game_context.beginPath();
  game_context.arc(objectX, objectY, objectRadius, 0, 2 * Math.PI);
  game_context.fillStyle = "white";
  game_context.fill();
  game_context.closePath();
}

function updateGameArea() {
  game_context.clearRect(0, 0, game_screen.width, game_screen.height);

  if (gameRunning) {
    objectY += objectSpeed;

    if (
      objectY + objectRadius > platformY &&
      objectX > platformX &&
      objectX < platformX + platformWidth
    ) {
      // Object intercepted by the platform
      score += 10;
      objectY = 0;
      objectX =
        Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;
    } else if (objectY + objectRadius > game_screen.height) {
      // Object reached the bottom without interception
      endGame();
    }

    drawObject();
    drawPlatform();
    requestAnimationFrame(updateGameArea);
  }
}

function startGame() {
  gameRunning = true;
  score = 0;
  objectY = 0;
  objectX =
    Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;
  updateGameArea();
}

function endGame() {
  gameRunning = false;
  alert("Game Over! Your score: " + score);
}

document.onkeydown = function (event) {
  var name = event.key;
  var code = event.code;
  if (name == "ArrowRight" && platformX + platformWidth < game_screen.width) {
    platformX += 10;
  }
  if (name == "ArrowLeft" && platformX > 0) {
    platformX -= 10;
  }
};

// Agora, diretamente exportando a variável após sua definição
export let start_button: HTMLButtonElement;
