import { addRectOnGrid, getData } from "./data.js"
const grid = document.querySelector('#game-board')
const userInput = document.querySelector('#find-user')
const findUserBtn = document.querySelector('#find-user-btn')
const form = document.querySelector('#form')
const loader = document.querySelector('.loader')

export function fetchData() {
  async function fetchHandler(user = 'dieBijacz') {
    grid.innerHTML = ''
    loader.classList.add('show')
    grid.style.border = 'none'
    const data = await getData(user)
    addRectOnGrid(data)
    if (data) {
      loader.classList.remove('show')
      grid.style.border = '1px solid #D2D2D2'
    }
  }

  userInput.addEventListener('keydown', () => {
    findUserBtn.classList.remove('hide')
  })

  // user input
  form.addEventListener('submit', async (e) => {
    if (userInput.value === '') return 'dieBijacz'
    e.preventDefault()
    fetchHandler(userInput.value)
  })

  fetchHandler()
}
