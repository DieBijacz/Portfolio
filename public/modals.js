export function modals() {
  const openModalBtns = document.querySelectorAll('.open-modal')
  const closeModalBtns = document.querySelectorAll('.close-modal')
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
}