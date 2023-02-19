import { addRectOnGrid } from './data.js'
import { snakeHead, onSameCoords, growSnake } from './snake.js'

let foodLeft = []
let fooTotal = []

export function getFood(food) {
  foodLeft = [...food]
  fooTotal = [...food]
}

export function resetFood() {
  foodLeft = [...fooTotal]
}

export async function draw() {
  addRectOnGrid(foodLeft)
}

export function update() {
  checkEatFood()
}

function checkEatFood() {
  foodLeft.map(food => {
    if (food.value > 0) {
      if (onSameCoords(food, snakeHead())) {
        removeFood(food)
        growSnake()
      }
    }
  })
}

function removeFood(food) {
  return foodLeft = foodLeft.filter(f => f.index !== food.index), food
}