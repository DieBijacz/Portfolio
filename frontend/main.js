import { addRectOnGrid, getData } from "./data.js"
const grid = document.querySelector('#game-board')
const userInput = document.querySelector('#find-user')
const form = document.querySelector('#form')


const DEFAULT_USER = 'dieBijacz'

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (userInput.value === '') {
    setupDefaultUser()
  } else {
    grid.innerHTML = ''
    const data = await getData(userInput.value)
    addRectOnGrid(data)
  }
})

async function setupDefaultUser() {
  grid.innerHTML = ''
  const data = await getData(DEFAULT_USER)
  addRectOnGrid(data)
}

setupDefaultUser()