const grid = document.querySelector('#game-board')
const userInput = document.querySelector('#find-user')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(userInput.value)
})

const USER = 'shiffman'

getData(USER)

async function getData(USER) {
  let arr = []
  try {
    await fetch(`http://127.0.0.1:5000/${USER}`)
      .then(response => response.json())
      .then(data => arr = [...data])
    arr.map((value, index) => {
      if (value !== null && value > 0) {
        const posx = Math.ceil((index + 1) / 7)
        const posy = Math.ceil((index + 1) % 7) === 0 ? 7 : Math.ceil((index + 1) % 7)
        addRectOnGrid(value, posx, posy)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

function addRectOnGrid(value, posx, posy) {
  const rect = document.createElement('div')
  rect.style.gridRowStart = posy
  rect.style.gridColumnStart = posx
  rect.classList.add('rect')
  rect.dataset.value = value
  grid.appendChild(rect)
}