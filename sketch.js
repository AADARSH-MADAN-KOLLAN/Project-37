var canvas;
var database;
var quiz, player, question;
var gameState = 0;
var playerCount;
var allPlayers;
var answer = 0;
var submit;

function setup() {
  canvas = createCanvas(850, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw() {
  background("cyan");
  if (playerCount === 4) {
    quiz.update(1);
  }
  if (gameState === 1) {
    quiz.play();
  }
}
