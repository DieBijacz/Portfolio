import { fetchData } from "./fetchData.js"
const readMorebtn = document.querySelector('#read-more-btn')
const readMoreModal = document.querySelector('#read-more-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const copyBtns = document.querySelectorAll('.copy-btn')
const openMasta = document.querySelector('#masta-modal')
const openSwift = document.querySelector('#swift-modal')
const closeMasta = document.querySelector('#close-masta')
const closeSwift = document.querySelector('#close-swift')
const modalMasta = document.querySelector('#masta')
const modalSwift = document.querySelector('#swift')

// MODAL
readMorebtn.addEventListener('click', () => {
  readMoreModal.classList.remove('hide')
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      readMoreModal.classList.add('hide')
    }
  })
})

openMasta.addEventListener('click', () => {
  modalMasta.classList.remove('hide')
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      modalMasta.classList.add('hide')
    }
  })
})

openSwift.addEventListener('click', () => {
  modalSwift.classList.remove('hide')
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      modalSwift.classList.add('hide')
    }
  })
})

closeModalBtn.addEventListener('click', () => {
  readMoreModal.classList.add('hide')
  window.removeEventListener('keydown')
})

closeMasta.addEventListener('click', () => {
  modalMasta.classList.add('hide')
  window.removeEventListener('keydown')
})
closeSwift.addEventListener('click', () => {
  modalSwift.classList.add('hide')
  window.removeEventListener('keydown')
})

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// CLIPBOARDS
copyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.value)
    navigator.clipboard.writeText(e.target.value);
  })
})

// DATA FOR SNAKE
fetchData()