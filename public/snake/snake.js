import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5

let snakeBody
let newSegments = 0

export function resetSnake() {
  newSegments = 0
  return snakeBody = [{ x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }]
}

export function update() {
  const inputDirection = getInputDirection()
  addSegments()

  snakeBody.unshift({ x: snakeBody[0].x + inputDirection.x, y: snakeBody[0].y + inputDirection.y })
  snakeBody.pop()
}

export function draw(gameBoard) {
  // DRAW SNAKE
  snakeBody.forEach(segment => {
    // for each body cell add x and y coordinate
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function growSnake() {
  newSegments += 1
}

export function onSnake(coords, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return onSameCoords(coords, segment)
  })
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] }
  }
  newSegments = 0
}

export function snakeHead() {
  return { x: snakeBody[0].x, y: snakeBody[0].y }
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

export function onSameCoords(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y
}