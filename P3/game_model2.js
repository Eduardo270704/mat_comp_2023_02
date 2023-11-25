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
var objectSpeedX;
var objectSpeedY;
var score;
var gameRunning;
var movementDirection;
var movementSpeed;
var objectsBarraged;

document.addEventListener("DOMContentLoaded", function () {
  game_screen = document.getElementById("game_screen");
  game_context = game_screen.getContext("2d");
  platformWidth = 5;
  platformHeight = 50;
  platformX = game_screen.width - platformWidth - 10;
  platformY = (game_screen.height - platformHeight) / 2;
  objectRadius = 10;
  objectX = 0;
  objectY =
    Math.random() * (game_screen.height - objectRadius * 2) + objectRadius;
  objectSpeedX = 1;
  objectSpeedY = 0;
  score = 0;
  gameRunning = false;
  movementDirection = 0;
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
    objectX += objectSpeedX;
    objectY += objectSpeedY;

    if (
      objectX + objectRadius > platformX &&
      objectY > platformY &&
      objectY < platformY + platformHeight
    ) {
      score += 10;
      objectX = 0;
      objectY =
        Math.random() * (game_screen.height - objectRadius * 2) + objectRadius;

      objectSpeedX += 0.1;
      objectSpeedY = 0;

      objectsBarraged++;

      if (objectsBarraged >= 4) {
        movementSpeed += 0.8;
        objectsBarraged = 0;
      }
    } else if (objectX + objectRadius > game_screen.width) {
      endGame();
    }

    platformY += movementDirection * movementSpeed;
    platformY = Math.max(0, Math.min(game_screen.height - platformHeight, platformY));

    drawObject();
    drawPlatform();
    updateScoreDisplay();

    requestAnimationFrame(updateGameArea);
  }
}

function updateScoreDisplay() {
  document.getElementById("score_display").textContent = "Score: " + score;
}

function startGame() {
  gameRunning = true;
  score = 0;
  objectX = 0;
  objectY =
    Math.random() * (game_screen.height - objectRadius * 2) + objectRadius;

  objectSpeedX = 1;
  objectSpeedY = 0;

  objectsBarraged = 0;

  updateGameArea();
}

function endGame() {
  gameRunning = false;
  alert("Game Over! Your score: " + score);
}

document.addEventListener("keydown", function (event) {
  var name = event.key.toLowerCase();
  if (name == "arrowup" || name == "w") {
    movementDirection = -1;
  }
  if (name == "arrowdown" || name == "s") {
    movementDirection = 1;
  }
});

document.addEventListener("keyup", function (event) {
  var name = event.key.toLowerCase();
  if (name == "arrowup" || name == "w" || name == "arrowdown" || name == "s") {
    movementDirection = 0;
  }
});
