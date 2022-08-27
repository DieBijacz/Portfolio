import { getFood } from "./snake/food.js"
const grid = document.querySelector('#game-board')
const userInput = document.querySelector('#find-user')

export async function getData(USER) {
  let arr = []
  let data = []
  await fetch(`https://masta-official.herokuapp.com/${USER}`)
    .then(response => response.json())
    .then(data => arr = [...data])
    .catch(error => {
      console.log(error, data)
      userInput.classList.add('wrong')
    })
  arr.map((value, index) => {
    if (value !== null) {
      const posx = Math.ceil((index + 1) / 7)
      const posy = Math.ceil((index + 1) % 7) === 0 ? 7 : Math.ceil((index + 1) % 7)
      const object = { index, value, x: posx, y: posy }
      data.push(object)
    }
  })
  getFood([...data])
  return data
}

export function addRectOnGrid(data) {
  data.map(rect => {
    if (rect.value > 0) {
      const rectElement = document.createElement('div')
      rectElement.style.gridRowStart = rect.y
      rectElement.style.gridColumnStart = rect.x
      rectElement.classList.add('rect')
      rectElement.dataset.value = rect.value
      grid.appendChild(rectElement)
    }
  })
}