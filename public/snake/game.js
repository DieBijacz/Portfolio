import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, snakeHead, snakeIntersection, resetSnake } from './snake.js'
import { draw as drawFood, resetFood, update as updateFood } from './food.js'
import { outSideGrid } from './grid.js'
import { resetInputDireciton } from './input.js'
let lastRenderTime = 0
let gameOver = false

const gameBoard = document.querySelector('#game-board')
const gameOverText = document.querySelector('#game-over')

//initial game start
document.querySelector('#start-snake').addEventListener('click', () => {
  resetGame()
  window.requestAnimationFrame(main)
  window.addEventListener(
    "keydown",
    (e) => {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
      }
    },
    false
  );
})

function main(currentTime) {
  if (gameOver) {
    gameOverText.classList.add('show')
    return
  }
  window.requestAnimationFrame(main) // game loop refresh when window allows next animation frame to be render
  const secondsLastRender = (currentTime - lastRenderTime) / 1000

  if (secondsLastRender < 1 / SNAKE_SPEED) return //faster snake = often page resresh
  lastRenderTime = currentTime // update time

  draw()
  update()
}

function update() {
  checkLose()
  updateFood()
  updateSnake()
}

function draw() {
  gameBoard.innerHTML = '' //clear between draws
  drawSnake(gameBoard)
  drawFood()
}

function checkLose() {
  gameOver = outSideGrid(snakeHead()) || snakeIntersection()
}

function resetGame() {
  gameOver = false
  gameOverText.classList.remove('show')
  resetSnake()
  resetInputDireciton()
  resetFood()
}