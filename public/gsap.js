export function animations() {
  gsap.registerPlugin(ScrollTrigger);

  // HERO
  function animateHero() {
    gsap.from(".logo", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
      fontSize: '5vw',
      y: '50%',
      x: '20%'
    })

    gsap.from(".front-end-developer", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
      opacity: 1,
    })
    gsap.from(".menu", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
      opacity: 1,
    })
  }

  function loadHeroAnimation() {
    // load hero
    gsap.from('.logo', { opacity: 0, y: '300%', scale: 0, duration: 1, ease: "elastic.out(.3, 0.2)" })
    gsap.from('.front-end-developer', { scale: 10, opacity: 0, duration: .7, delay: .3, ease: "elastic.out(.3, 0.4)" })
  }

  animateHero()
  loadHeroAnimation()
}