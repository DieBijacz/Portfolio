export function animations() {
  gsap.registerPlugin(ScrollTrigger);

  // HERO
  function animateHero() {
    gsap.from(".logo", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
      fontSize: '4.5vw',
      y: '70%'
    })

    gsap.to('.front-end-developer', {
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "top center",
        scrub: .1
      },
      display: 'none',
      opacity: 0,
      scale: 0,
      x: '-100%',
    })

    gsap.to('#menu-bottom', {
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "top center",
        scrub: .1
      },
      display: 'none',
      opacity: 0,
      scale: 0,
      x: '-100%',
      y: '100%'
    })

    gsap.to('#navbar', {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 20%",
        end: "top top",
        scrub: .5
      },
      boxShadow: '0 2px 20px black'
    })

    // load hero
    gsap.from('.menu', { opacity: 0, scale: 0, x: '-100%', duration: .7 })
    gsap.from('.logo', { opacity: 0, scale: 0, x: '-100%', duration: .7 })
    gsap.from('.front-end-developer', { scale: 10, opacity: 0, duration: .5, delay: 1 })
  }

  function animateMoreProjects() {
    let dotTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#more-projects-wrapper',
        start: 'top center',
        markers: true,
        // end: '80% bottom',
        // scrub: 1,
      },
    })
    dotTL.to('#dot', { width: '100%', height: '5px', duration: .5 })
    dotTL.to('#dot', { height: '100vh', duration: .5 })
    dotTL.from('.project-card', { opacity: 0, x: 1000, delay: .5, duration: .5 })
    dotTL.from('.project-image-wrapper', { opacity: 0, duration: .5 })
  }

  animateMoreProjects()
  animateHero()
}