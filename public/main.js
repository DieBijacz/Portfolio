import { fetchData } from "./fetchData.js"
const copyBtns = document.querySelectorAll('.copy-btn')
const openModalBtns = document.querySelectorAll('.open-modal')
const closeModalBtns = document.querySelectorAll('.close-modal')

// MODAL
openModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    openModal(e.target.dataset.modal)
  })
})

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    closeModal(e.target.dataset.modal)
  })
})

function openModal(project) {
  const projectModal = document.querySelector(`#${project}`)
  projectModal.classList.remove('hide')
  addEscFunctionality(projectModal)
}

function closeModal(project) {
  const projectModal = document.querySelector(`#${project}`)
  projectModal.classList.add('hide')
  removeEscFunctionality(projectModal)
}

function addEscFunctionality(projectModal) {
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      projectModal.classList.add('hide')
    }
  })
}

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