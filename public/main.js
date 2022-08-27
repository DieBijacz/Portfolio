import { fetchData } from "./fetchData.js"
const readMorebtn = document.querySelector('#read-more-btn')
const readMoreModal = document.querySelector('#read-more-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const projects = document.querySelectorAll('.project')
const closeProjectBtns = document.querySelectorAll('.close-project')
const copyBtns = document.querySelectorAll('.copy-btn')

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// MODAL
closeModalBtn.addEventListener('click', () => {
  closeModal()
})

readMorebtn.addEventListener('click', () => {
  readMoreModal.classList.add('show')
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      closeModal()
    }
  })
})

function closeModal() {
  readMoreModal.classList.remove('show')
  window.removeEventListener('keydown')
}

// PROJECTS

projects.forEach(project => {
  project.addEventListener('click', (e) => {
    openProject(e.target)
  })
})

closeProjectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    closeProject()
  })
})

function openProject(project) {
  if (project.classList.contains('project')) {
    project.classList.add('show')
  }
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      closeProject()
    }
  })
}

function closeProject() {
  projects.forEach(project => {
    project.classList.remove('show')
  })
  window.removeEventListener('keydown',)
}

copyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.value)
    navigator.clipboard.writeText(e.target.value);
  })
})

// DATA FOR SNAKE
fetchData()