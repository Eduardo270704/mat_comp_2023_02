"use strict";
var game_screen;
var game_context;
var platformWidth;
var platformHeight;
var platformX;
var platformY;
var objectRadius;
var objectX;
var objectY;
var objectSpeed;
var score;
var gameRunning;
var movementDirection;
var movementSpeed;
var objectsBarraged;

document.addEventListener("DOMContentLoaded", function () {
  game_screen = document.getElementById("game_screen");
  game_context = game_screen.getContext("2d");
  platformWidth = 100;
  platformHeight = 5;
  platformX = (game_screen.width - platformWidth) / 2;
  platformY = game_screen.height - platformHeight - 10;
  objectRadius = 10;
  objectX =
    Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;
  objectY = 0;
  objectSpeed = 1;
  score = 0;
  gameRunning = false;
  movementDirection = 0; // Inicialmente parado
  movementSpeed = 2;
  objectsBarraged = 0;

  const start_button = document.getElementById("start_button");
  start_button.onclick = startGame;
  updateGameArea();
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

    // Verifica se o objeto colidiu com a plataforma
    if (
      objectY + objectRadius > platformY &&
      objectX > platformX &&
      objectX < platformX + platformWidth
    ) {
      // Objeto interceptado pela plataforma
      score += 10;
      objectY = 0;
      objectX =
        Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;

      // Aumenta a velocidade do objeto
      objectSpeed += 0.1; // ou qualquer valor que você considere apropriado

      // Incrementa a contagem de objetos barrados
      objectsBarraged++;

      // Após 4 objetos barrados, aumenta a velocidade da barra
      if (objectsBarraged >= 4) {
        movementSpeed += 0.8; // ou qualquer valor que você considere apropriado
        objectsBarraged = 0; // reinicia a contagem
      }
    } else if (objectY + objectRadius > game_screen.height) {
      // Objeto atingiu o fundo sem ser interceptado pela plataforma
      endGame();
    }

    // Lógica de movimento suave da barra
    platformX += movementDirection * movementSpeed;

    // Impede que a barra saia dos limites da tela
    if (platformX < 0) {
      platformX = 0;
    } else if (platformX + platformWidth > game_screen.width) {
      platformX = game_screen.width - platformWidth;
    }

    // Desenha o objeto e a plataforma
    drawObject();
    drawPlatform();

    // Solicita a próxima atualização do frame
    requestAnimationFrame(updateGameArea);
  }
}

function startGame() {
  gameRunning = true;
  score = 0;
  objectY = 0;

  // Reinicia a velocidade do objeto para o valor inicial
  objectSpeed = 1;

  // Reinicia a contagem de objetos barrados
  objectsBarraged = 0;

  objectX =
    Math.random() * (game_screen.width - objectRadius * 2) + objectRadius;
  updateGameArea();
}

function endGame() {
  gameRunning = false;
  alert("Game Over! Your score: " + score);
}

document.addEventListener("keydown", function (event) {
  var name = event.key.toLowerCase(); // Converte a tecla para minúsculo
  if (name == "arrowright" || name == "d") {
    movementDirection = 1;
  }
  if (name == "arrowleft" || name == "a") {
    movementDirection = -1;
  }
});

document.addEventListener("keyup", function (event) {
  var name = event.key.toLowerCase(); // Converte a tecla para minúsculo
  if (
    name == "arrowright" ||
    name == "a" ||
    name == "arrowleft" ||
    name == "d"
  ) {
    movementDirection = 0;
  }
});