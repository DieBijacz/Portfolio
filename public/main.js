import { fetchDataForSnake } from "./snake/fetchData.js"
import { animations } from "./gsap.js"
import { modals } from "./modals.js";

const copyBtns = document.querySelectorAll('.copy-btn')
const blob = document.querySelector('#blob')

document.onpointermove = e => {
  const { clientX, clientY } = e
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: 'forwards' })
}


// CLIPBOARDS
copyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.value)
    navigator.clipboard.writeText(e.target.value);
  })
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

// DATA FOR SNAKE
// fetchDataForSnake()

// GSAP
animations()

// MODALS functionality
// modals()

