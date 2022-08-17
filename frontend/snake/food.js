import { addRectOnGrid } from '../data.js'
import { snakeHead, onSameCoords } from './snake.js'

let foodLeft = []

export function getFood(food) {
  foodLeft = [...food]
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
      }
    }
  })
}

function removeFood(food) {
  return foodLeft = foodLeft.filter(f => f.index !== food.index), food
}