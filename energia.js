window.addEventListener("scroll", function(){
    let header = document.querySelector('#header') 
    header.classList.toggle('rolagem', window.scrollY > 300)
})

window.sr = ScrollReveal({ reset: true});

sr.reveal('.area-1', { duration: 1600});

sr.reveal('.area-2', { duration: 1600});

sr.reveal('.area-3', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-4', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-5', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-6', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-7', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-8', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.area-9', { 
    rotate: { x: 0, y: 80, z: 0},
    duration: 2000
});
