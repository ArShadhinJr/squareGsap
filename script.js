let tl = gsap.timeline()
gsap.from( "#nav img , #nav li , #nav button" , {
    duration: .3,
    y: -50, 
    opacity: 0, 
    stagger: 0.1
} )
tl.from( "#hero h1", {
    duration: .4,
    y: 50,
    opacity: 0, 
    stagger: 0.4
} )
gsap.from( "#hero span", {
    duration: 1,
    opacity:0.5, 
    delay: 0.7, 
    repeat: -1,
    yoyo: true
} )
gsap.from( ".img img", {
    duration: 1,
    opacity: 0,
    scale: 0.5, 
    stagger: 0.2, 
    delay: .2,
    y: 10
})

gsap.to( "#scroll", {
    duration: 1,
    y: 10, 
    repeat: -1,
    yoyo: true
} )

gsap.from( "#icon > ul > li" , {
    duration: .3,
    y: 80, 
    opacity: 0, 
    stagger: 0.2
} )
